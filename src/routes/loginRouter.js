const express = require('express');

const router = express.Router();

const rescue = require('express-rescue');

const loginController = require('../controllers/loginController');

const loginJoi = require('../middlewares/joiMiddleware');

router.post('/', loginJoi, rescue(loginController.login));

module.exports = router;