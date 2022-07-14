const express = require('express');

const router = express.Router();

const rescue = require('express-rescue');

const createUserController = require('../controllers/createUserController');

const validCreateUser = require('../middlewares/createUserJoiMiddleware');

router.post('/', validCreateUser, rescue(createUserController.createUser));

module.exports = router; 