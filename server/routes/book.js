const express = require("express");
const router = express();
const bookCtrl = require("../controllers/book");

router.get("/", bookCtrl.getAllBooks);
router.post("/", bookCtrl.createBook);
router.get("/:id", bookCtrl.getOneBook);

module.exports = router;
