if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require('express');
const mongoose = require('mongoose');


// initialize epxress app
const port = 80;
const app = express();


// connect to databse and start listening for connections
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    app.listen(port);
    console.log('Listening to port ' + port);
})
.catch((err) => {
    console.log(err);
});


// set view engine
app.set('view engine', 'ejs');
// add static route
app.use(express.static('./public'));
// use body parsing middleware
app.use(express.urlencoded({ extended: true }));


// routes
app.get('/', (request, response) => {
    response.render('index');
});