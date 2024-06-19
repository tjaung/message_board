var express = require('express');
var router = express.Router();

/* GET new form page. */
// const formPath = path.join(__dirname, '/../','views', 'form.pug')
// console.log(contactPath)
router.get('/', (req, res, next) => {
    res.render('new', { title: 'New Message' });
})
module.exports = router;
