var express = require("express");
var app = express();
var router = express.Router();
var EmailController = require("../controllers/EmailController");

router.get("/", EmailController.index);

module.exports = router;