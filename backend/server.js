import express from "express";
import cors from "cors";
import recipeRoutes from "./routes/recipeRoutes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: process.env.FRONTEND_URL
}));
app.use(express.json());

app.use("/api/recipes", recipeRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});