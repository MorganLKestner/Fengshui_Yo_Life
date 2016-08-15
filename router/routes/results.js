const express = require('express');
const router = express.Router();
const pgp = require('pg-promise')();
const db = require('../../db/db');


router.get('/results', function (req, res){
  	db.one('SELECT * FROM results WHERE user_id = $1',[req.params.user_id])
    .then(function (data) {
        var result = data
    	console.log('get success');
    	res.json('results', result);   
        // success;
    })
    .catch(function (error) {
        // error;
        	console.log('our error is');
        	console.log(error)
         res.json({ error: error });   

    });

});


router.post('/results', function (req, res){
     results = req.body
    db.one('INSERT INTO results (friend, year_sign, month_sign, peach) VALUES ($1,$2,$3,$4)', 
        [results.friend,results.year_sign, results.month_sign, results.peach])
    .then(function (insertRes) {
        console.log('post happened on thebackend');
        res.redirect('results', insertRes);
  
        // success;
    })
    .catch(function (error) {
        // error;
            console.log('our error is');
            console.log(error)
         res.json({ error: error });   

    });

});



// app.put('/users/:id',function(req,res){
//   user = req.body
//   db.none("UPDATE users SET name=$1, email=$2, password=$3 WHERE id=$4",
//     [user.name,user.email,user.password,user.id]).then(function(data){
//       console.log('update done!')
//       res.json(user)
//     })
// })

// router.delete('/search/:id',function(req,res){
//   id = req.params.id
//   db.none("DELETE FROM results WHERE id=$1",[id]).then(function(data){
//       console.log('delete done!!!!!')
//       res.render('api')
//     })
// })

module.exports = router;
