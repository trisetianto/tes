var express = require('express');
var router = express.Router();
var mysql = require("mysql");

// First you need to create a connection to the db
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "tpa"
});

con.connect(function(err){
  if(err){
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});


router.get('/alllahan', function(req, res) {
    con.query('SELECT * FROM lahan', function(err,rows){
        if(err) throw err;
        res.json(rows);
    });
});

router.get('/', function(req, res) {
    con.query('SELECT * FROM lahan', function(err,rows){
        if(err) throw err;
        res.json(rows);
    });
});

router.get('/lahannama', function (req, res) {
    var query = 'SELECT lahan_id, lahan_nama FROM lahan';
    con.query(query, function (err, rows) {
        if (err) throw err;
        res.json(rows);
    })
})


router.get('/lahan/:id', function (req, res) {
    var query = ''
    con.query('SELECT * FROM lahan WHERE lahan_id = ' + req.params.id, function (err, rows) {
        if (err) throw err;
        res.json(rows);
    });
});

router.get('tes',function (req, res) {
    res.render("view/error");
});

module.exports = router;