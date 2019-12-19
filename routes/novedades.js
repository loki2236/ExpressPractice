const express = require('express');
const router = express.Router();
const db = require('../controllers/dbController');
const oId = require('mongodb').ObjectId;

const collectionName = 'novedades';

router.post('/insertNovedad', function(req, res) {
    //res.render('index', { title: 'Novedades de la empresa', novedades: docs });
            let collection = db.getDb().collection(collectionName);
            collection.insertOne({novedad: req.body.novedad, user: req.body.user, date: Date.now()});
            res.redirect('/');
            res.end();        
});


router.post('/deleteNovedad', function(req, res) {
    let collection = db.getDb().collection(collectionName);
    console.log("Borrando ID: " +req.body.id);
        collection.deleteOne({ _id: new oId(req.body.id) }, function (err, results) {
        if(err)
            console.log(err);
        });
        res.redirect('/');
        res.end();
});

module.exports = router;