const express = require('express');
const router = express.Router();
const {createAuthor,getSingleAuthor,getAllAuthors} = require('../controller/authorController');

router.route('/').post(createAuthor);
router.route('/getsingle').get(getSingleAuthor);
router.route('/getall').get(getAllAuthors);

module.exports = router;