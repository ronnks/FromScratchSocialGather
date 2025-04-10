import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import postRouter from "./routes/postRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();

const allowedOrigins = ["http://localhost:5173"];

app.use(express.json());
app.use(cors({ origin: allowedOrigins, credentials: true }));

//API ENDPOINTS
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

app.use("/api/post", postRouter);
app.use("/api/user", userRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

app.listen(port, () => console.log(`Server started on PORT: ${port}`));
