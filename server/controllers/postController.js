import Post from "../models/post.model.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({
      sucess: true,
      myPosts: posts,
      message: "All posts fetched successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ sucess: false, message: "Server error :: GET ALL POSTS ERROR" });
  }
};

export const createAPost = async (req, res) => {
  try {
    const { author, content } = req.body;

    if (!author || !content) {
      return res
        .status(400)
        .json({ sucess: false, message: "Author and content are required" });
    }

    const newPost = new Post({
      content: content,
      author: author,
    });

    await newPost.save();
    res.status(201).json({
      sucess: true,
      newPost: newPost,
      message: "Post created successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ sucess: false, message: "Server error :: CREATE POST ERROR" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const product = req.body;
    const updatedPost = await Post.findByIdAndUpdate(id, product, {
      new: true,
    });
    if (!updatedPost) {
      return res.status(404).json({ sucess: false, message: "Post not found" });
    }
    res.status(200).json({
      sucess: true,
      updatedPost: updatedPost,
      message: "Post updated successfully",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ sucess: false, message: "Server error :: UPDATE POST ERROR" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ sucess: false, message: "Post not found" });
    }
    res
      .status(200)
      .json({ sucess: false, message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ sucess: false, message: "Server error :: DELETE POST ERROR" });
  }
};
