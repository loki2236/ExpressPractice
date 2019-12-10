const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// Mongo Config
const url = 'mongodb://localhost:27017';
const dbName = 'talentoDigital';
const client = new MongoClient(url);

// Use connect method to connect to the Server
client.connect(function(err) {
  console.log("Connectado a MongoDB");
  const db = client.db(dbName);
  const collection = db.collection('novedades');
  // deberia cargar aca MongoDB
  // Cargar los documentos
  // y pasarlos en una variable al template.

  collection.find({}).toArray(function(err, docs) {
    if (!err){
      console.log(`Se han cargado ${docs.length} documentos`);
      /* Pongo el GET aca. */
      router.get('/', function(req, res, next) {
        res.render('index', { title: 'Novedades de la empresa', novedades: docs });
      });

    }
  });


});







module.exports = router;
