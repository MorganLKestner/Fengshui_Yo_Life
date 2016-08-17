const express = require('express');
const router = express.Router();

router.get('/', function (req, res){
  if(!req.session.user){
    res.redirect('sessions/new');
//    res.render('index', { 'email': 'test@gmail.com' });

  } else {
	var request = require('request');
	request('https://fengshui-api.com/api/v1/findChineseSignOfMonth?token=8E4B59z5b657c26N485Rh9db9j2D321da271CM7d&year=1987&month=2&day=1', function (error, response, body) {
  		if (!error) {
  			console.log("request happened.") // Show the HTML for the Google homepage.
  	  		console.log(body)
  	  		console.log(error)
  		} else {
  			console.log('prob with resquest')
  			console.log(body)
  			console.log(error)

  		}
	})
    res.render('index', { 'email': req.session.user.email });
  }
});

module.exports = router;
// && response.statusCode == 200