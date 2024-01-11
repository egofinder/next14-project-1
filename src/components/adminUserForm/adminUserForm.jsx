"use client";

import { addUser } from "@/lib/action";
import styles from "./adminUserForm.module.css";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, undefined);
  const formRef = useRef();
  console.log(state);

  useEffect(() => {
    if (state?.success == "Saved to DB") {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <form action={formAction} className={styles.container} ref={formRef}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="username" />
      <input type="text" name="email" placeholder="email" />
      <input type="text" name="img" placeholder="Image" />
      <input type="text" name="password" placeholder="password" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="false">User</option>
        <option value="true">Admin</option>
      </select>
      <button>Add</button>
      {state?.error ? state.error : null}
    </form>
  );
};

export default AdminUserForm;
