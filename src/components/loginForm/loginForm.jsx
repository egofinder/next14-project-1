"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormState, useFormStatus } from "react-dom";

export function LoginButton() {
  const { pending } = useFormStatus();

  return <button>{pending ? "Login..." : "Login with Email"}</button>;
}

const LoginForm = () => {
  const [errorMessage, formAction] = useFormState(login, undefined);

  const router = useRouter();
  useEffect(() => {
    errorMessage === "NEXT_REDIRECT" ? router.push("/") : null;
  }, [errorMessage, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="password" placeholder="Password" />
      <LoginButton />
      {errorMessage ?? errorMessage}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
