import postModel from "../models/post.model";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await postModel.find().populate("user", "username");
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: GET ALL POSTS ERROR" });
  }
};

export const createPost = async (req, res) => {
  try {
    const { content, like, comment, share } = req.body;
    const newPost = new postModel({
      user: req.user.id,
      content,
      like,
      comment,
      share,
    });
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: CREATE POST ERROR" });
  }
};

export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { content, like, comment, share } = req.body;
    const updatedPost = await postModel.findByIdAndUpdate(
      id,
      { content, like, comment, share },
      { new: true }
    );
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json(updatedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: UPDATE POST ERROR" });
  }
};

export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPost = await postModel.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: DELETE POST ERROR" });
  }
};

export const likePost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.like += 1;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: LIKE POST ERROR" });
  }
};

export const commentToPost = async (req, res) => {
  try {
    const { id } = req.params;
    const { comment } = req.body;
    const post = await postModel.findById(id);
    const addAComment = await postModel.findByIdAndUpdate(
      id,
      { ...comment },
      { new: true }
    );
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.comment += 1;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: COMMENT POST ERROR" });
  }
};

export const shareAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await postModel.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }
    post.share += 1;
    await post.save();
    res.status(200).json(post);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: SHARE POST ERROR" });
  }
};
