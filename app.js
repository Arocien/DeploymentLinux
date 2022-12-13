const express = require('express');

const app = express();

app.listen(5101);



app.get('/', function (req, res) {
    res.sendFile(__dirname + "index.html");
});