const express = require('express');
const router = express.Router();
const app = express();

app.get('/', (req, res) => {
    res.render('homepage')
});

module.exports = router;