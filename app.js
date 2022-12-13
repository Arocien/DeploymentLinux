const express = requre('express');

const app = express();

app.listen(8080);



app.get('/', function (req, res) {
    res.sendFile(__dirname + "index.html");
});