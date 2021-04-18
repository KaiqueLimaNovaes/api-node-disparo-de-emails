var bodyParser = require("body-parser");
var express = require("express");
const cors = require("cors");
var app = express();
var router = require("./routes/routes");
var emailSend = require("./routes/routesEmailSend");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use("/", router);
app.use("/sendemail", emailSend);

app.listen(3005, () => {
  console.log("Servidor rodando");
});