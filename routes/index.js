var express = require('express');
var router = express.Router();

// deberia cargar aca MongoDB
// Cargar los documentos
// y pasarlos en una variable al template.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Novedades de la empresa' });
});


module.exports = router;
