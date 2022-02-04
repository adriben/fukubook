const express = require('express');
const router = express();


router.get('/', bookCtrl.getAllBooks)
router.post('/', bookCtrl.createBook)

module.exports = router;
