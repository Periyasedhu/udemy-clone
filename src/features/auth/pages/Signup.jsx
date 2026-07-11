import { AuthIllustration } from "../components/AuthIllustration";
import { SignupForm } from "../components/SignupForm";

export default function Signup() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      <AuthIllustration />

      <SignupForm />

    </div>
  );
}