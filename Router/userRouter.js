// external imports
const express = require('express');

// internal imports
const {getUsers} = require('../controller/usersController');
const decodedHtmlResponse = require("../middlewares/common/decodedHtmlResponse");

const router = express.Router()

// login page
router.get('/',decodedHtmlResponse('User'),  getUsers );

module.exports = router;