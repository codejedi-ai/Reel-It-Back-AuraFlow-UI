
import { FormMessage, Message } from "@/components/form-message";
import { SubmitButton } from "@/components/submit-button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
async function waitlistAction(prevState: Message, formData: FormData) {
  const email = formData.get("email") as string;

  if (!email) {
    return {
      type: "error",
      title: "Email is required",
    };
  }
  if (!email.includes("@")) {
    return {
      type: "error",
      title: "Invalid email address",
    };
  }
  if (!email.endsWith("@example.com")) {
    return {
      type: "error",
      title: "Only example.com emails are allowed",
    };
  }
  return {
    type: "success",
    title: "Success",
    description: "You have been added to the waitlist",
  };
}
export default async function Waitlist() {
  return (
    <>
      <form className="flex flex-col min-w-64 max-w-64 mx-auto">
        <h1 className="text-2xl font-medium">Join the Waitlist</h1>
        <p className="text-sm text text-foreground">
          Be the first to know when we launch!
        </p>
        <div className="flex flex-col gap-2 [&>input]:mb-3 mt-8">
          <Label htmlFor="email">Email</Label>
          <Input name="email" placeholder="you@example.com" required />

        </div>
      </form>
    </>
  );
}