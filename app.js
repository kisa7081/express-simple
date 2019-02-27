const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next)=>{
    res.status(404);
    res.send("Sorry, this file cannot be found");
});

module.exports = app;