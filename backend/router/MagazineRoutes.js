const express = require('express');
const {createMagazine,getSingleMagazine,getAllMagazines,updateMagazine,deleteMagazine} = require('../controller/magazineController');
const router = express.Router();

router.route('/').post(createMagazine);
router.route('/:isbn').get(getAllMagazines);
router.route('/:isbn').put(updateMagazine);
router.route('/:isbn').delete(deleteMagazine);
router.route('/getsinglemagazine').get(getSingleMagazine)

module.exports = router;