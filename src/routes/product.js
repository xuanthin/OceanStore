const express = require('express');
const router = express.Router();
const ProductController = require('../app/controllers/clients/ProductController');

router.get('/', ProductController.index);
router.get('/:slug', ProductController.show);

module.exports = router;
