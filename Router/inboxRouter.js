// external imports
const express = require('express');

// internal imports
const {getInbox} = require('../controller/inboxController');
const decodedHtmlResponse = require("../middlewares/common/decodedHtmlResponse");

const router = express.Router()

// login page
router.get('/',decodedHtmlResponse('Inbox'), getInbox );

module.exports = router;