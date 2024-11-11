import Intro from "@/components/intro";
import NewsletterForm from "@/components/newsletter-form";
import RecentPosts from "@/components/recent-posts";
import RecentProjects from "@/components/recent-projects";
import SignIn from "@/components/sign-in";

export default function Home() {
  return (
    <section className="py-24">
      <div className="container max-w-3xl">
        <Intro />
        <RecentPosts />
        <RecentProjects />
        <NewsletterForm />
        <SignIn />
      </div>
    </section>
  );
}
