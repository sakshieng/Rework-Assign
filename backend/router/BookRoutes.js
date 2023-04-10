const express = require('express');
const {createBook,getSingleBook,getAllBooks,updateBook,deleteBook} = require('../controller/bookController');
const router = express.Router();

router.route('/').post(createBook);
router.route('/:isbn').get(getSingleBook);
router.route('/:isbn').put(updateBook);
router.route('/:isbn').delete(deleteBook);
router.route('/getallbooks').get(getAllBooks);

module.exports = router;