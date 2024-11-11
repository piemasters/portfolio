import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function SignIn() {
  return (
    <div className="flex justify-center gap-4 py-12">
      <SignedOut>
        <Button asChild>
          <SignInButton />
        </Button>
        <Button asChild>
          <SignUpButton />
        </Button>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
}
