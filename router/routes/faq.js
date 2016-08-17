const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
//const dbr = pgp('postgres://morgankestner@localhost:5432/fengshui_db');
var psqldb = process.env.DATABASE_URL || 'postgres://morgankestner@localhost:5432/fengshui_db'
const dbr = pgp(psqldb);

console.log('faq works');

router.get('/', function (req, res){
    res.render('faq');
  
});

module.exports = router;