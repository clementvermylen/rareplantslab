const express = require('express');
const router = express.Router();
const app = express();
const expressEjsLayout = require('express-ejs-layouts')
const mongoose = require('mongoose');

//connection to database
// try {
//     const conn = mongoose.connect('mongodb+srv://me:Jr6D5NqhObhtxHNU@todo.iqbkq.mongodb.net/TODO?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {
//         console.log('connected to db')
//     });
// } catch (e) {
//     console.log(e)
// }

//EJS
app.set('views', './views');
app.set('view engine', 'ejs');
app.use("/static", express.static("public"));

//BodyParser
app.use(express.urlencoded({ extended: false }));
app.use(express.json())


//Routes
app.use('/', require('./routes/homepage'));
app.use('/shop', require('./routes/shop'));
app.use('/about', require('./routes/about'));


app.listen(3000, () => {
    console.log('listening on port 3000')
});