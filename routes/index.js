var express = require('express');
var router = express.Router();
var date = new Date();
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'TPA', y: date.getFullYear()});
});

router.get('/ld', function (req, res) {
  res.render('index', { title: 'Location Data', y: date.getFullYear()});
})

router.get('/lr', function (req, res) {
  res.render('index', { title: 'Location Rank', y: date.getFullYear()})
})

module.exports = router;
