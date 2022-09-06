const express = require('express');
const router = express.Router();
const HomeController = require('../app/controllers/clients/HomeController');
const Authorization = require('../app/middlewares/Authorization');

router.get('/:slug', Authorization.authorization, HomeController.show);
router.get('/', HomeController.index);

module.exports = router;
