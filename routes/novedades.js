const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;

// Mongo Config
const url = 'mongodb://localhost:27017';
const dbName = 'talentoDigital';
const client = new MongoClient(url);


router.post('/insertNovedad', function(req, res) {
    //res.render('index', { title: 'Novedades de la empresa', novedades: docs });
    client.connect((err) => {
        console.log("Connectado a MongoDB");
        const db = client.db(dbName);
        const collection = db.collection('novedades');
        collection.insertOne({novedad: req.body.novedad, user: req.body.user, date: req.body.date});
        res.end();
    });
});

router.get('/getNovedades', function(req, res) {
    //res.render('index', { title: 'Novedades de la empresa', novedades: docs });
    client.connect((err) => {
        console.log("Connectado a MongoDB");
        const db = client.db(dbName);
        const collection = db.collection('novedades');
        collection.find({}).toArray(function(err, docs) {
            if (!err){
                res.send(docs);
            }
        });
    });
});

module.exports = router;