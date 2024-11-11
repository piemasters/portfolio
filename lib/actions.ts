"use server";

import { z } from "zod";
import { Resend } from "resend";
import { ContactFormSchema, NewsletterFormSchema } from "@/lib/schemas";
import ContactFormEmail from "@/emails/contact-form-email";
import WelcomeEmail from "@/emails/welcome-email";

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
type NewsletterFormInputs = z.infer<typeof NewsletterFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.RESEND_EMAIL;

export async function sendEmail(data: ContactFormInputs) {
  const result = ContactFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }
  if (!fromEmail) {
    return { error: "Sender email not defined" };
  }

  try {
    const { name, email, message } = result.data;
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      cc: [fromEmail],
      subject: "Contact form submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      react: ContactFormEmail({ name, email, message }),
      headers: {
        "List-Unsubscribe": "<https://example.com/unsubscribe>",
      },
    });

    if (!data || error) {
      throw new Error("Failed to send email");
    }

    return { success: true };
  } catch (error) {
    return { error };
  }
}

export async function subscribe(data: NewsletterFormInputs) {
  const result = NewsletterFormSchema.safeParse(data);

  if (result.error) {
    return { error: result.error.format() };
  }

  try {
    const { email } = result.data;
    const { data, error } = await resend.contacts.create({
      email: email,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    if (!data || error) {
      throw new Error("Failed to subscribe", { cause: error?.message });
    }
    if (!fromEmail) {
      return { error: "Sender email not defined" };
    }

    const { data: sendData, error: sendError } = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Newsletter Confirmation",
      text: `Message`,
      react: WelcomeEmail({}),
      headers: {
        "List-Unsubscribe": `<https://${process.env.VERCEL_URL}/unsubscribe>`,
      },
    });

    if (!sendData || sendError) {
      throw new Error("Subscribed but failed to send welcome email");
    }

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: { message: error?.message, cause: error?.cause } };
    }
    return { error: String(error) };
  }
}

export async function getUserId(email: string) {
  try {
    const { data, error } = await resend.contacts.list({
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
    });

    if (!data || error) {
      throw new Error("Failed to get user", { cause: error?.message });
    }

    const user = data?.data?.filter((user) => user.email === email)[0];

    if (!user) {
      throw new Error("No user found");
    }

    return { id: user.id };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: { message: error?.message, cause: error?.cause } };
    }
    return { error: String(error) };
  }
}

export async function unsubscribe({ email }: { email: string }) {
  try {
    const user = await getUserId(email);

    if (!user?.id || user.error) {
      throw new Error("No user found");
    }

    const { data, error } = await resend.contacts.update({
      id: user.id,
      audienceId: process.env.RESEND_AUDIENCE_ID as string,
      unsubscribed: true,
    });

    if (!data || error) {
      throw new Error("Failed to unsubscribe", { cause: error?.message });
    }

    return { success: true };
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { error: { message: error?.message, cause: error?.cause } };
    }
    return { error: String(error) };
  }
}
