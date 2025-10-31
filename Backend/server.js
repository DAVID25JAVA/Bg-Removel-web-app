import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/db.js";

await connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("API working fine........."));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
