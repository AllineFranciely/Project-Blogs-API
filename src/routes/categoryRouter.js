const express = require('express');

const router = express.Router();

const rescue = require('express-rescue');

const categoriesController = require('../controllers/categoryController');

const validateCreateCategory = require('../middlewares/categoryJoiMiddleware');

const validateTokenJWT = require('../middlewares/tokenJWTValidate');

router.post('/', validateTokenJWT, validateCreateCategory,
  rescue(categoriesController.createCategory));

router.get('/', validateTokenJWT, categoriesController.getCategories);

module.exports = router;