const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const mongo = require('mongodb');

// Mongo Config
const url = 'mongodb://localhost:27017';
const dbName = 'talentoDigital';
const client = new MongoClient(url);
var collection;

client.connect(function(err) {
    const db = client.db(dbName);
    collection = db.collection('novedades');
});


router.post('/insertNovedad', function(req, res) {
    //res.render('index', { title: 'Novedades de la empresa', novedades: docs });

            collection.insertOne({novedad: req.body.novedad, user: req.body.user, date: Date.now()});
            res.redirect('/');
            res.end();        
});


router.post('/deleteNovedad', function(req, res) {
    
    console.log("Borrando ID: " +req.body.id);
        collection.deleteOne({ _id: new mongo.ObjectId(req.body.id) }, function (err, results) {
        if(err)
            console.log(err);
        });
        res.redirect('/');
        res.end();
});

module.exports = router;