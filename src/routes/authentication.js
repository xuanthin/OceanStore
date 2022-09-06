const express = require('express');
const router = express.Router();
const AuthenticationController = require('../app/controllers/AuthenticationController');

router.post('/register', AuthenticationController.register);
router.post('/login', AuthenticationController.login);
router.get('/logout', AuthenticationController.logout);
router.get('/', AuthenticationController.show);

module.exports = router;
