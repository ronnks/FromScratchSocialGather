import Post from "../models/post.model.js";

export const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: GET ALL POSTS ERROR" });
  }
};

export const createAPost = async (req, res) => {
  try {
    const { author, content } = req.body;

    const newPost = new Post({
      content: content,
      author: author,
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
    const updatedPost = await Post.findByIdAndUpdate(
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
    const deletedPost = await Post.findByIdAndDelete(id);
    if (!deletedPost) {
      return res.status(404).json({ message: "Post not found" });
    }
    res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: DELETE POST ERROR" });
  }
};

export const likeAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
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

export const commentOnAPost = async (req, res) => {
  const { content, likes, replies, shares, userId, postId } = req.body;

  const addAComment = {
    author: userId,
    content: content,
    likes: likes,
    replies: replies,
    shares: shares,
  };
  Post.findByIdAndUpdate(
    postId,
    { $push: { comments: addAComment } },
    { new: true }
  )
    .then((post) => {
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.status(200).json(post);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ message: "Server error :: COMMENT POST ERROR" });
    });
};

export const shareAPost = async (req, res) => {
  try {
    const { id } = req.params;
    const post = await Post.findById(id);
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
