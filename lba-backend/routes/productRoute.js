const router = require("express").Router();

const fetchAllProducts = require("../controllers/fetchAllProducts");

router.get("/",fetchAllProducts); //gets all the products from lba_product

module.exports = router;