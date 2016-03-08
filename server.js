/**
 * Created by fujiiyousuke on 16/03/08.
 */
var express = require("express");

var app = express();
app.use(express.static("client"));
console.log("start listening at 3773");
app.listen(3773);
