"use server";

import { connectToDb } from "./utils";
import { Post, User } from "./models";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";
import bcrypt from "bcryptjs";

export const addPost = async (formData) => {
  //   const title = formData.get("title");
  //   const desc = formData.get("desc");
  //   const slug = formData.get("slug");
  //   const userId = formData.get("userId");

  const { title, desc, img, slug, userId } = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      img,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("Saved to DB");
    // 캐쉬 상태인데도 블로그가 추가되면 url을 revalidation해서 업데이트한다.
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

export const deletePost = async (formData) => {
  const id = formData.get("id");
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);
    console.log("Delete Post ID: " + id + ".");
    // 캐쉬 상태인데도 블로그가 추가되면 url을 revalidation해서 업데이트한다.
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

export const handleGithubLogin = async () => {
  await signIn("github");
};

export const handleGithubLogout = async () => {
  await signOut();
};

export const register = async (previousState, formData) => {
  const { username, email, img, password, passwordRepeat } =
    Object.fromEntries(formData);

  if (password !== passwordRepeat) {
    return { error: "Password do not match!" };
  }

  try {
    const user = await User.findOne({ email: email });

    if (user) {
      return { error: "User is already exists!" };
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    connectToDb();
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img,
    });
    await newUser.save();
  } catch (error) {
    if (error) {
      return "something went wrong";
    }
    // throw error;
  }
};

export const login = async (previousState, formData) => {
  // const { email, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
};

export const addUser = async (previousState, formData) => {
  const { username, email, password, img, isAdmin } =
    Object.fromEntries(formData);
  try {
    connectToDb();
    const newUser = new User({
      username,
      email,
      password,
      img,
      isAdmin,
    });

    await newUser.save();
    console.log("Saved to DB");
    // 캐쉬 상태인데도 블로그가 추가되면 url을 revalidation해서 업데이트한다.
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};

export const deleteUser = async (formData) => {
  const id = formData.get("id");
  try {
    connectToDb();
    await Post.deleteMany({ userId: id });
    await User.findByIdAndDelete(id);
    console.log("Delete User ID: " + id + ".");
    // 캐쉬 상태인데도 블로그가 추가되면 url을 revalidation해서 업데이트한다.
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("Something went wrong");
  }
};
