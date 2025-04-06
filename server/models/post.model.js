const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },

  content: {
    type: String,
    default: "",
  },
  like: {
    type: Number,
    default: 0,
  },
  comment: {
    type: [String],
    default: "",
  },
  share: {
    type: Number,
    default: 0,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const postModel = mongoose.models.post || mongoose.model("post", PostSchema);

export default postModel;
