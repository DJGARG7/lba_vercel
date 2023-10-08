const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");

const publicRoute = require("./routes/publicRoute");

dotenv.config();
const port = process.env.PORT || 3005;

const app = express();
app.use(express.static(path.join(__dirname,'build')));

app.use(
    cors({
        origin: "http://localhost:3000",
        credentials: true,
    })
);
app.use(express.json());
app.get('/',(req,res) => {
    res.sendFile(path.join(__dirname,'build','index.html'));
});
app.use("/public",publicRoute);
app.listen(port, () => console.log(`Backend Service running at port ${port}.`));