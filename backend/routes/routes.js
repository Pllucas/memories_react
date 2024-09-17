const express = require("express")

const router = express.Router()

//UPLOAD
const upload = require("../helpers/upload")

const { createMemory, getMemories, getMemory, deleteMemory, updateMemory, toggloeFavorite, addComent } = require("../controllers/MemoryController")

router.post("/", upload.single("image"), (req,res,next) => {
    const image = req.file

    if(!image){
        return res.status(400).json({msg: "Por favor, envie um arquivo."})
    }

    next()
},(req,res) => createMemory(req, res) )

//ROTAS
router.get("/", (req, res) => getMemories(req,res))

router.get("/:id", (req, res) => getMemory(req,res))

router.delete("/:id", (req, res) => deleteMemory(req,res))

router.patch("/:id", upload.single("image") ,(req, res) => updateMemory(req,res))

router.patch("/favorite/:id", (req, res) => toggloeFavorite(req,res))

router.patch("/:id/comment", (req, res) => addComent(req, res))

module.exports = router