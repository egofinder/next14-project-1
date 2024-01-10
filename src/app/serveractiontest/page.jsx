import { addPost, deletePost } from "@/lib/action";

const ServerActionTest = () => {
  return (
    <div>
      <form action={addPost}>
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="desc" placeholder="Description" />
        <input type="text" name="slug" placeholder="Slug" />
        <input type="text" name="userId" placeholder="User ID" />
        <button>Create Post</button>
      </form>

      <form action={deletePost}>
        <input type="text" name="id" placeholder="Post Id" />
        <button>Delete Post</button>
      </form>
    </div>
  );
};
export default ServerActionTest;
