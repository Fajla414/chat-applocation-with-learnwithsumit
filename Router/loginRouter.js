// external imports
const express = require("express");

// internal imports
const { getLogin } = require("../controller/loginController");
const decodedHtmlResponse = require("../middlewares/common/decodedHtmlResponse");

const router = express.Router();

// login page
router.get("/", decodedHtmlResponse("Login"), getLogin);

module.exports = router;
