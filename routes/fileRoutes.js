const express = require("express");
const { addFileController, getFileController } = require("../controllers/fileController");

const router = express.Router();

router.get("/", (req,res) => {
    res.send("This is my File system")
});

router.post("/add-files", addFileController);

router.get("/get-files", getFileController);

module.exports = router;
