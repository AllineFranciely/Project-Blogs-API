const express = require('express');

const router = express.Router();

const rescue = require('express-rescue');

const validateTokenJWT = require('../middlewares/tokenJWTValidate');

const postsController = require('../controllers/postController');

router.get('/', validateTokenJWT, rescue(postsController.getPosts));

router.get('/:id', validateTokenJWT, rescue(postsController.getPostById));

module.exports = router;