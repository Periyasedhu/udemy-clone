import { GoogleButton } from "./GoogleButton";
import { InputField } from "./InputField";

export function SignupForm() {
  return (
    <div className="flex items-center justify-center">

      <div className="w-full max-w-md">
        <h1 className="text-center text-3xl font-bold mb-8">
        Sign up with email
        </h1>
        <GoogleButton />
        <div className="flex items-center my-6">
      <div className="flex-1 border-t border-gray-300"></div>
      <span className="px-4 text-sm text-gray-500 whitespace-nowrap">
        Or sign up with email
      </span>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>

        <InputField
          label="Full Name"
        />

        <InputField
          label="Email"
        />


        <button className="w-full bg-violet-600 text-white p-3 rounded mt-4">

          Continue

        </button>

      </div>

    </div>
  );
}