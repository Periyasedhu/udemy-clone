import type { ComponentProps } from "react";
import LoginGoogle from "../../../components/Button/LoginGoogle";

export function GoogleButton(props: ComponentProps<typeof LoginGoogle>) {
  return <LoginGoogle {...props} />;
}
