const express = require('express');

const router = express.Router();

const rescue = require('express-rescue');

const userController = require('../controllers/userController');

const validateCreateUser = require('../middlewares/userJoiMiddleware');

const validateTokenJWT = require('../middlewares/tokenJWTValidate');

router.post('/', validateCreateUser, rescue(userController.createUser));

router.get('/', validateTokenJWT, rescue(userController.getUsers));

module.exports = router; 