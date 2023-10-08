const db = require("../../config/db");
const {
    v4: uuidv4
} = require("uuid");
const uploadImage = (req, res) => {
    console.log(req.file);
    const imagefile_host = req.headers.host;
    const imagefile_url = `http://${imagefile_host}/gallery/images/${req.file.filename}`;

    //generate uuid
    const uuid = uuidv4();
    const query = "INSERT INTO lba_image values (?,?,'N',?);";
    const queryParam = [uuid, imagefile_url, req.file.originalname]
    try {
        db.query(
            query, queryParam,
            (error, results) => {
                if (error) throw error;
                else res.send({
                    success: 1,
                    imagefile_url: imagefile_url
                });
            }
        );
    } catch (error) {
        res.status(500).send(error);
    }
}
module.exports = uploadImage;