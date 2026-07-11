import React from "react";

type Props = {
  label: string;
  type?: string;
};

export function InputField({
  label,
  type = "text",
}: Props) {
  return (
    <div className="relative mb-5">
      <input
        id={label}
        type={type}
        placeholder=" "
        className="peer w-full rounded border border-gray-400 px-4 pt-6 pb-2 font-bold outline-none transition-colors focus:border-violet-600"
      />

      <label
        htmlFor={label}
        className="
          absolute
          left-4
          font-bold
          text-base
          top-4
          bg-white
          px-1
          text-gray-500
          transition-all
          duration-200
          peer-placeholder-shown:top-4
          peer-placeholder-shown:text-base
          peer-placeholder-shown:text-gray-500
          peer-focus:top-1
          peer-focus:text-xs
          peer-[&:not(:placeholder-shown)]:top-1
          peer-[&:not(:placeholder-shown)]:text-xs
        "
      >
        {label}
      </label>
    </div>
  );
}