import express from "express";
import routerProduct from "./routes/users.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", routerProduct);
app.listen(process.env.PORT, () => {
  console.log("Server is running on p");
});


// install axios.
// install concurrently
// cau hinh lai package.json
// them thu muc controllers/product.js
// them thu muc routes/product.js