import { AuthIllustration } from "../components/AuthIllustration";
import { LoginForm } from "../components/LoginForm";

export default function Login() {
  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      <AuthIllustration />

      <LoginForm />

    </div>
  );
}