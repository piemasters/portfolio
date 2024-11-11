import UnsubscribeForm from "@/components/unsubscribe-form";

export default async function UnsubscribePage() {
  return (
    <section className="pb-24 pt-40">
      <div className="container max-w-3xl">
        <h2 className="title">Sorry to see you go!</h2>

        <UnsubscribeForm />
      </div>
    </section>
  );
}
