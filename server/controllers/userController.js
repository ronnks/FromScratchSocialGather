import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    if (!firstName || !lastName || !username || !email || !password) {
      return res
        .status(400)
        .json({ sucess: false, message: "All fields are required" });
    }

    const existingUserWithEmail = await User.findOne({ email });
    if (existingUserWithEmail) {
      return res
        .status(400)
        .json({ sucess: false, message: "User already exists" });
    }

    const existingUserWithUsername = await User.findOne({ username });
    if (existingUserWithUsername) {
      return res
        .status(400)
        .json({ sucess: false, message: "Username already taken" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({
      firstName,
      lastName,
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "strict",
      maxAge: 0.021 * 24 * 60 * 60 * 1000, // 30 minutes
    });
    console.log("User registered successfully:", newUser);
    res
      .status(201)
      .json({ sucess: true, message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ sucess: false, message: "Server error :: REGISTRATION ERROR" });
    console.log("Registration error:", error);
  }
};

export const login = async (req, res) => {
  const { input, password } = req.body;

  try {
    if (!input || !password) {
      return res
        .status(400)
        .json({ sucess: false, message: "All fields are required" });
    }

    const userEmail = await User.findOne({
      $or: [{ email: input }, { username: input }],
    });
    if (!userEmail) {
      return res.status(400).json({ sucess: false, message: "Invalid email" });
    }

    const isPasswordValid = await bcrypt.compare(password, userEmail.password);
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ sucess: false, message: "Invalid password" });
    }

    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "strict",
      maxAge: 0.021 * 24 * 60 * 60 * 1000, // 30 minutes
    });

    res.status(200).json({ sucess: true, message: "Login successful" });
    console.log("User logged in successfully:", userEmail);
  } catch (error) {
    console.error(error);
    console.log("Login error:", error);
    return res
      .status(500)
      .json({ sucess: false, message: "Server error :: LOGIN ERROR" });
  }
};

export const logout = async (req, res) => {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "None" : "strict",
    });
    res.status(200).json({ sucess: true, message: "Logout successful" });
  } catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ sucess: false, message: "Server error :: LOGOUT ERROR" });
  }
};
