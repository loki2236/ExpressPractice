const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const Handlebars = require('handlebars');

// Mongo Config
const url = 'mongodb://localhost:27017';
const dbName = 'talentoDigital';
const client = new MongoClient(url);
var collection;

//Handlebars
Handlebars.registerHelper('convert', function (aTime) {
  return new Date(parseInt(aTime)).toISOString();
});

client.connect(function(err) {
  if (!err){
    let db = client.db(dbName);
    collection = db.collection('novedades');
  }
});


router.get('/', function(req, res, next) {
// Use connect method to connect to the Server

  // deberia cargar aca MongoDB
  // Cargar los documentos
  // y pasarlos en una variable al template.
    collection.find({}).sort({'date': -1}).toArray(function(err, docs) {
    if (!err){
      console.log(`Se han cargado ${docs.length} documentos`);
        res.render('index', { title: 'Novedades de la empresa', novedades: docs, timestamp: Date.now() });
    }
    
  });
});

module.exports = router;
