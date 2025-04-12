import bcrypt from "bcryptjs";
import User from "../models/user.model.js";

export const register = async (req, res) => {
  const { firstName, lastName, username, email, password } = req.body;
  try {
    if (!firstName || !lastName || !username || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const existingUserWithEmail = await User.findOne({ email });
    if (existingUserWithEmail) {
      return res.status(400).json({ message: "User already exists" });
    }

    const existingUserWithUsername = await User.findOne({ username });
    if (existingUserWithUsername) {
      return res.status(400).json({ message: "Username already taken" });
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
    console.log("User registered successfully:", newUser);
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: REGISTRATION ERROR" });
    console.log("Registration error:", error);
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userEmail = await User.findOne({ email });
    if (!userEmail) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isPasswordValid = await bcrypt.compare(password, userEmail.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
    console.log("User logged in successfully:", userEmail);
  } catch (error) {
    console.error(error);
    console.log("Login error:", error);
    return res.status(500).json({ message: "Server error :: LOGIN ERROR" });
  }
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error :: LOGOUT ERROR" });
  }
};
