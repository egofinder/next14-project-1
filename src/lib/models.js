import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      requried: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      requried: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      requried: true,
      min: 6,
      max: 13,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requried: true,
    },
    desc: {
      type: String,
      requried: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: String,
      requried: true,
    },
    slug: {
      type: String,
      requried: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Post = mongoose.models.Post || mongoose.model("Post", postSchema);
