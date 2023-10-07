const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const productRoute = require("./routes/productRoute");

dotenv.config();
const port = process.env.PORT || 3005;

const app = express();
app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.use("/",productRoute);
app.listen(port, () => console.log(`Backend Service running at port ${port}.`));