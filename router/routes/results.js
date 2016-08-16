const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const dbr = pgp('postgres://morgankestner@localhost:5432/fengshui_db');
const pry = require('pryjs')

router.get('/', function (req, res, next){
    var email = req.session.user.email;
    console.log('this is my user id '+ email)
    dbr.any("SELECT * FROM results WHERE user_id = $1",[email])
    .then(function (data) {
        var data = {
            "results": data
        };
        console.log('get success');
    	res.render('results/results', data);   
        // eval(pry.it)
        // res.send(data)
        // next();
        // success;
    })
    .catch(function (error) {
        // error;
        	console.log('our error is');
        	console.log(error)
         res.json({ error: error });   

    });

});


router.get('/results',function(req,res,next){
//     res.send('success?')
    res.render('view',data)
})
//req.session.user.id

router.post('/', function (req, res){
    results = req.body
    console.log('your user id is '+ req.session.user.email);
    console.log('post before .then');
    dbr.none("INSERT INTO results (friend, year_sign, month_sign, peach, user_id) VALUES ($1,$2,$3,$4,$5)", 
        [results.friend,results.year, results.month, results.peach, results.user_id])
    .then(function () {
        console.log('post happened on thebackend');
        //console.log(results),
        // console.log('your results id is '+ results);

        res.redirect('results');
  
        // success;
    })
    .catch(function (error) {
        // error;
            console.log('our error is');
            console.log(error)
            console.log(req.session.user.email)
            console.log(results.user_idh)
         res.json({ error: error });   

    });

});


module.exports = router;
