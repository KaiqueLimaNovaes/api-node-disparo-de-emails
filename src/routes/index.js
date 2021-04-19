const router = require('express').Router();

const HomeController = require("../controllers/HomeController");
const EmailController = require("../controllers/EmailController");

router.get("/", HomeController.index);
router.get("/sendemail", EmailController.index);

module.exports = router;