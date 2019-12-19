const express = require('express');
const router = express.Router();
const Handlebars = require('handlebars');
const db = require('../controllers/dbController');

// Mongo Config
const collectionName = 'novedades';


//Handlebars
Handlebars.registerHelper('convert', function (aTime) {
  return new Date(parseInt(aTime)).toISOString();
});

router.get('/', function(req, res, next) {
    let collection = db.getDb().collection(collectionName);
    collection.find({}).sort({'date': -1}).toArray(function(err, docs) {
    if (!err){
      console.log(`Se han cargado ${docs.length} documentos`);
        res.render('index', { title: 'Novedades de la empresa', novedades: docs, timestamp: Date.now() });
    }
    
  });
});

module.exports = router;
