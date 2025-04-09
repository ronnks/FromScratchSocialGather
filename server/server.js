import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import postRouter from "./routes/postRouter.js";
import userRouter from "./routes/userRouter.js";

const app = express();
const port = process.env.PORT || 4000;

connectDB();

app.use(express.json());
app.use(cors({ credentials: true }));

app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

//API ENDPOINTS
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
