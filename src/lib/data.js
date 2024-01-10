// const users = [
//   { id: 1, username: "A" },
//   { id: 2, username: "B" },
// ];

// const posts = [
//   { id: 1, title: "Post 1", body: "loremddd1", userId: 1 },
//   { id: 2, title: "Post 2", body: "loremddd2", userId: 1 },
//   { id: 3, title: "Post 3", body: "loremddd3", userId: 2 },
//   { id: 4, title: "Post 4", body: "loremddd4", userId: 2 },
// ];

import { unstable_noStore } from "next/cache";
import { Post, User } from "./models";
import { connectToDb } from "./utils";

export const getPosts = async () => {
  unstable_noStore();
  try {
    connectToDb();
    const posts = await Post.find();
    return posts;
  } catch (err) {
    console.log(err);
    throw Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  unstable_noStore();
  try {
    connectToDb();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (err) {
    console.log(err);
    throw Error("Failed to fetch post!");
  }
  //   return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
  unstable_noStore();
  try {
    connectToDb();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw Error("Failed to fetch user!");
  }
  //   return users.find((user) => user.id === parseInt(id));
};

export const getUsers = async () => {
  unstable_noStore();
  try {
    connectToDb();
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
    throw Error("Failed to fetch users!");
  }
};
