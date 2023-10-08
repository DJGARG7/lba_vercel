const router = require("express").Router();
const uploadImage = require("../controllers/imageController/uploadImage");

const multer = require('multer');
const path = require('path');


const gallery = 'build/gallery/images'

//storage engine
const storage = multer.diskStorage({
    destination: gallery,
    filename: (req, file, cb) => {
        return cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
    }
})
const upload = multer({
    storage: storage
})

router.post("/upload", upload.single('imagefile'), uploadImage)

module.exports = router;