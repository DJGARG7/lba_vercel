const db = require("../config/db");

const fetchAllProducts = (req,res) => {
    const query = "SELECT * FROM lba_product;";
    db.query(
        query,
        (error, results) => {
            if (error) res.status(500).send(`${error.sqlMessage}`);
            else res.send(results);
        }
    );
}
module.exports = fetchAllProducts;
