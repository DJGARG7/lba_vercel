const router = require("express").Router();

const fetchAllPublicData = require("../controllers/fetchAllPublicData");

router.get("/public",fetchAllPublicData); //gets all kind of data required by public website

module.exports = router;