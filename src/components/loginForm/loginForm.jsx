"use client";

import { login } from "@/lib/action";
import styles from "./loginForm.module.css";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useFormState } from "react-dom";

const LoginForm = () => {
  const [state, formAction] = useFormState(login, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success ? router.push("/") : null;
  }, [state?.success, router]);
  return (
    <form action={formAction} className={styles.form}>
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="password" placeholder="Password" />
      <button>Login with Email</button>
      {state?.error}
      <Link href="/register">
        {"Don't have an account?"} <b>Register</b>
      </Link>
    </form>
  );
};

export default LoginForm;
