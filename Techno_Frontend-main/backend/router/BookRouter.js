const express = require('express');
const {createBook,getSingleBook,getAllBooks,updateBook,deleteBook} = require('../controller/bookController');
const router = express.Router();

router.route('/').post(createBook);
router.route('/getsinglebook').get(getSingleBook)
router.route('/getallbooks').get(getAllBooks);
router.route('/deletbook').delete(deleteBook);

module.exports = router;