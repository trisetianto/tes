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
    var query = "SELECT l.lahan_id, l.lahan_nama, l.luas, l.curah_hujan, l.kedalaman_air_tanah, l.permeabilitas, l.kepadatan_penduduk, b.biologis_ket, p.produktivitas_ket, a.administrasi_ket, z.zona_penyanga_ket "
        + "FROM lahan l "
        + "JOIN biologis b ON l.biologis_id = b.biologis_id "
        + "JOIN produktivitas p ON l.produktivitas_id = p.produktivitas_id "
        + "JOIN administrasi a ON l.administrasi_id = a.administrasi_id "
        + "JOIN zona_penyangga z ON l.zona_penyangga_id = z.zona_penyanga_id ";
    con.query(query, function(err,rows){
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

router.post('/newlahan', function (req, res) {

})

router.get('tes',function (req, res) {
    res.render("view/error");
});

module.exports = router;