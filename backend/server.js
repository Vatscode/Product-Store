import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from"cors";
import dotenv from "dotenv";

import productRoutes from "./routes/productRoutes.js"

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

console.log(PORT);
app.use(express.json());
app.use(cors());

app.use(helmet()); // a middleware to secure and protect the application by setting various HTTP headers.

app.use(morgan("dev")); //log the request


app.get("/api/products", productRoutes);

app.listen(3000, () =>{
    console.log("Server is running on port " + PORT);

})


