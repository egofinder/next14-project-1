"use client";

import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/action";
import { useFormState } from "react-dom";
import { useEffect, useRef } from "react";

const AdminPostForm = ({ userId }) => {
  const [state, formAction] = useFormState(addPost, undefined);

  const formRef = useRef();

  useEffect(() => {
    if (state?.success == "Saved to DB") {
      formRef.current.reset();
    }
  }, [state]);

  return (
    <form action={formAction} className={styles.container} ref={formRef}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="Image" />
      <textarea type="text" name="desc" placeholder="Desc" rows={10} />
      <button>Add</button>
      {state?.error ? state.error : null}
    </form>
  );
};

export default AdminPostForm;
