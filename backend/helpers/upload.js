const multer = require("multer")

const path = require("path")

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, path.join(__dirname, "../public/images/"))
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + path.extname(file.originalname)) //teste.jpg -> extname(38873828728782.jpg)
    }
})

const filterFitler = (req,file,cb) => {
    if(file.mimetype === "image/jpeg" || file.mimetype === "image/png"){
        cb(null, true)
    }else{
        cb(null, false)
    }
}

const upload = multer({
    storage,
    filterFitler,
})

module.exports = upload