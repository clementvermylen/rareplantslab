const express = require('express');
const router = express.Router();
const app = express();

router.get('/about', (req, res) => {
    res.render('about')
});

module.exports = router;