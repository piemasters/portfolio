"use client";

import { z } from "zod";
import { toast } from "sonner";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { UnsubscribeFormSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { unsubscribe } from "@/lib/actions";

type Inputs = z.infer<typeof UnsubscribeFormSchema>;

export default function UnsubscribeForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>({
    resolver: zodResolver(UnsubscribeFormSchema),
    defaultValues: {
      email: "",
    },
  });

  const processForm: SubmitHandler<Inputs> = async (data) => {
    const result = await unsubscribe(data);

    if (result?.error) {
      toast.error("An error occurred! Please try again.");
      return;
    }

    toast.success("Unsubscribed successfully!");
    reset();
  };

  return (
    <section className="relative isolate">
      <div className="relative">
        <form
          onSubmit={handleSubmit(processForm)}
          className="mt-16 lg:flex-auto"
          noValidate
        >
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Input
              type="email"
              id="email"
              autoComplete="email"
              placeholder="Email"
              {...register("email")}
              className="sm:col-span-2"
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full disabled:opacity-50"
            >
              {isSubmitting ? "Unsubscribing..." : "Unsubscribe"}
            </Button>
            {errors.email?.message && (
              <p className="ml-1 mt-2 text-sm text-rose-400">
                {errors.email.message}
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}
