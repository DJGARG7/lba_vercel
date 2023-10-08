const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const publicRoute = require("./routes/publicRoute");

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
app.use("/",publicRoute);
app.listen(port, () => console.log(`Backend Service running at port ${port}.`));