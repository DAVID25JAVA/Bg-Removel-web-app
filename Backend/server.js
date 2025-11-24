import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";
import userRouter from "./routes/userRoutes.js";

await connectDB();

const app = express();

app.use(express.json());
app.use(cors());

// user routes
app.use("/api/user", userRouter)

app.get("/", (req, res) => res.send("API working fine........."));
app.use('/api/user', userRouter)

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
