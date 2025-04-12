import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  author: {
    type: String,
    reqired: true,
  },

  content: {
    type: String,
    default: "",
  },
  like: [
    {
      type: Number,
      default: 0,
    },
  ],
  comment: [
    {
      arthor: {
        type: String,
        reqired: true,
      },
    },
    {
      content: {
        type: String,
        default: "",
      },
    },
    {
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
    {
      like: [
        {
          type: Number,
          default: 0,
        },
      ],
    },
    {
      reply: [
        {
          type: Number,
          default: 0,
        },
      ],
    },
  ],
  share: [
    {
      type: Number,
      default: 0,
    },
  ],

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Post = mongoose.model("post", PostSchema);

export default Post;
