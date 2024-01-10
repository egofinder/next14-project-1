"use client";
import { useFormState } from "react-dom";
import styles from "./registerForm.module.css";
import { register } from "@/lib/action";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const RegisterForm = () => {
  const [state, formAction] = useFormState(register, undefined);

  const router = useRouter();

  useEffect(() => {
    state?.success ? router.push("/login") : null;
  }, [state?.success, router]);

  return (
    <form className={styles.form} action={formAction}>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="text" name="img" placeholder="Profile Image" />
      <input type="text" name="password" placeholder="Password" />

      <input
        type="text"
        name="passwordRepeat"
        placeholder="Re-enter password"
      />
      <button>Register</button>
      {state?.error}
      <Link href="/login">
        Have an account? <b>Login</b>
      </Link>
    </form>
  );
};
export default RegisterForm;
