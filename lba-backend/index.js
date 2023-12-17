const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const publicRoute = require("./routes/publicRoute");
const imageRoute = require("./routes/imageRoute");

dotenv.config();
const port = process.env.PORT || 3005;
const frontendURL = process.env.FRONTEND || "http://localhost:3000"

const app = express();
app.use(express.static(path.join(__dirname,'build')));
app.use(
    cors({
        origin: frontendURL,
        credentials: true,
    })
);
app.use(express.json());
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build','index.html'));
});
app.use("/public",publicRoute);
app.use("/image",imageRoute);
app.listen(port, () => console.log(`Backend Service running at port ${port}.`));