"use client";

import styles from "./adminPostForm.module.css";
import { addPost } from "@/lib/action";

const AdminPostForm = ({ userId }) => {
  return (
    <form action={addPost} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="title" placeholder="Title" />
      <input type="text" name="slug" placeholder="Slug" />
      <input type="text" name="img" placeholder="Image" />
      <textarea type="text" name="desc" placeholder="Desc" rows={10} />
      <button>Add</button>
      {/* {state ? state.error : null} */}
    </form>
  );
};

export default AdminPostForm;
