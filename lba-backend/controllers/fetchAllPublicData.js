const db = require("../config/db");
const tablesMetadata = require("./tablesMetadata")
const fetchAllPublicData = (req, res) => {

    const data = req.body;
    var query;
    var queryParam;

    //to check if request body has valid keys
    for (const key of tablesMetadata.keysToCheck) {
        if (!(data.hasOwnProperty(key) && data[key] !== undefined && data[key] !== null)) {
            res.status(400).send("Invalid Request Body");
            return;
        }
    }

    //to check if data type is string
    const pub_table = data.pub_table;
    const pub_criteria = data.pub_criteria;
    if (!(typeof pub_table === 'string' && typeof pub_criteria === 'string' && typeof data.pub_criteria_value === 'string')) {
        res.status(400).send("Invalid Request Body");
        return;
    }

    //to check if pub_table is valid
    if (!tablesMetadata.publicAccess.includes(pub_table)) {
        res.status(400).send("Invalid Request Body");
        return;
    }

    //to check if pub_criteria is valid
    if (!tablesMetadata[pub_table].includes(pub_criteria)) {
        res.status(400).send("Invalid Request Body");
        return;
    }

    if (pub_table === 'pub_lba_category' && pub_criteria === 'all') {
        query = "SELECT * from lba_category where 1 = ?;";
        queryParam = [1];
    } else if (pub_table === 'pub_lba_image' && pub_criteria === 'carousel_flag_Y') {
        query = "SELECT * from lba_image where carousel_flag = ?;";
        queryParam = ['Y'];
    } else if (pub_table === 'pub_lba_product' && pub_criteria === 'keyword') {
        query = "SELECT * from lba_product where product_deleted_flag = 'N' and lower(product_name) like ?;";
        queryParam = [`%${data.pub_criteria_value.toLowerCase()}%`];
    } else if (pub_table === 'pub_lba_product' && pub_criteria === 'category_id') {
        query = "SELECT * from lba_product where product_deleted_flag = 'N' and category_id = ?;";
        queryParam = [data.pub_criteria_value];
    } else {
        query = "SELECT * from " + pub_table.substring(4) + " where " + pub_criteria + " = ?;";
        queryParam = [data.pub_criteria_value];
    }

    try {
        db.query(
            query, queryParam,
            (error, results) => {
                if (error) throw error;
                else res.send(results);
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = fetchAllPublicData;