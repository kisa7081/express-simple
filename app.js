const express = require('express');
const path = require('path');
const users = require('./routes/users');

const app = express();

app.set('views', './views');    // tells express where to find the views
app.set('view engine', 'pug');  // tells express to use pug as the template engine

app.use('/users', users);

app.use('/static', express.static('./public'));

app.get('/', (req, res) => {
    res.end(`root requested`);
});


app.get('/photos/:photoid', (req, res) => {
    res.end(`/photos requested, photoid ${req.params.photoid}, format ${req.query.format} and size ${req.query.size}`);
});




// app.use((req, res, next)=>{
//     res.status(404);
//     res.send("Sorry, this file cannot be found");
//     res.redirect('/404.html');
// });

module.exports = app;