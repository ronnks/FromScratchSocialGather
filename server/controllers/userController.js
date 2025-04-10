import bcrypt from "bcryptjs";
import User from "../models/user.model.js";
import validateEmail from "../../client/src/components/utlities/ValidateEmail.js";

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
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error :: REGISTRATION ERROR" });
  }
};

export const login = async (req, res, next) => {
  const { input, password } = req.body;

  try {
    if (!validateEmail(input) || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const user = await User.findOne({ email: input });
    if (!user) {
      return res.status(400).json({ message: "Invalid email" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error :: LOGIN ERROR" });
  }
  next();
};

export const logout = async (req, res) => {
  try {
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Server error :: LOGOUT ERROR" });
  }
};
