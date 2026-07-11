import { GoogleButton } from "./GoogleButton";
import { InputField } from "./InputField";
import { ForgotPassword } from "./ForgotPassword";

export function LoginForm() {
  return (
    <div className="flex items-center justify-center">

      <div className="w-full max-w-md">

        <h1 className="text-3xl font-bold mb-8">

          Login

        </h1>

        <GoogleButton />

        <InputField
          label="Email"
          type="email"
        />

        <InputField
          label="Password"
          type="password"
        />

        <button className="w-full bg-violet-600 text-white p-3 rounded mt-4">

          Login

        </button>

    <ForgotPassword />
      </div>

    </div>
  );
}