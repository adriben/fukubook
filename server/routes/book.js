const express = require("express");
const router = express();
const bookCtrl = require("../controllers/book");
// const multer = require("../middleware/multer-config");

router.get("/", bookCtrl.getAllBooks);
router.post("/", bookCtrl.createBook);
router.get("/:id", bookCtrl.getOneBook);
router.delete("/:id", bookCtrl.deleteBook);
router.put("/:id", bookCtrl.updateBook);

module.exports = router;
