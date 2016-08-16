const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const dbr = pgp('postgres://morgankestner@localhost:5432/fengshui_db');

console.log('faq works');

router.get('/', function (req, res){
    res.render('faq');
  
});

module.exports = router;