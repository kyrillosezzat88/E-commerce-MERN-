import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";
import errorHandler from "./middlewares/errorHandler.mjs";
import authRoute from "./routes/auth.mjs";
import productRoutes from "./routes/product.mjs";
import categoryRoutes from "./routes/category.mjs";
import userRoutes from "./routes/user.mjs";

const app = express();
app.use(morgan("tiny"));
dotenv.config();
app.use(express.json({ limit: "50mb" }));
app.use(cors());

const baseUrl = "/api/v1";

app.get(baseUrl, (req, res) => {
  return res.status(200).json({
    message: "Hello from backend",
  });
});

app.use(`${baseUrl}/auth`, authRoute);
app.use(`${baseUrl}/user`, userRoutes);
app.use(`${baseUrl}/category`, categoryRoutes);
app.use(`${baseUrl}/product`, productRoutes);

app.use(errorHandler);
//db connection
const port = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGOOSE_URL)
  .then(() =>
    app.listen(port, () => console.log(`server running on port ${port}`))
  );
