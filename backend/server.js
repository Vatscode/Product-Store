import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from"cors";
import dotenv from "dotenv";


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

console.log(PORT);
app.use(express.json());
app.use(cors());

app.use(helmet()); // a middleware to secure and protect the application by setting various HTTP headers.

app.use(morgan("dev")); //log the request


app.get("/api/products", (req, res) => {
    //GET ALL PRODUCTS FROM DB
    res.status(200).json({
        success: true,
        data: [
            {id: 1, name: "Product 1"},
            {id: 2, name: "Product 2"},
            {id: 3, name: "Product 3"},
            
            {id: 4, name: "Product 4"},
            


        ],
            
});


});

app.listen(3000, () =>{
    console.log("Server is running on port " + PORT);

})


