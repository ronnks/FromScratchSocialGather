import User from "../models/user.model.js";

export const getUser = async (req, res) => {
  const { userId } = req.body;
  try {
    if (!userId) {
      return res
        .status(400)
        .json({ sucess: false, message: "User ID is required" });
    }

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ sucess: false, message: "User not found" });
    }

    res.status(200).json({ sucess: true, user });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Server error :: GET USER ERROR" });
  }
};
