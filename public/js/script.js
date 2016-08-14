// doc ready file for jquery & js
$(document).ready(function() {
  console.log("doc ready loaded")
  	var body= $('#body');
  	var losho= $('#loshu');

	domService.material();

	$('#submit_btn').click(function(e){
		e.preventDefault();
		alert('submit');
		var day = $('#day').val();
		var year =  $('#year').val();
		var month = $('#month').val();
		console.log('do we know day: ' + day+ " " + month + " "+ year)

		//apiService.getLoShu(day, month, year);
		//apiService.getChineseSignYear(year, month, day);
		//apiService.getChineseSignMonth(year,month,day);
		apiService.getAllies(year,month,day);

	}); // submit btn
	
}); // doc ready

var domService = (function(){

	function addMaterial (){
		$('select').material_select();
	}

	function _getDay(){
		return dayInput.val()
	}
	
	return {
		//reference on material
		material: addMaterial,
		getDay: _getDay
	
	}

})(); // domService

var apiService = (function(){
	console.log("apiService works")

	var token = 'f737Ie15310mGZ7N2l61f2661eBF905c2NC51x86';
	var functionName = 'getOwnLoShu';
	var apiID = '?token=f737Ie15310mGZ7N2l61f2661eBF905c2NC51x86';
	var apiBaseUrl ='https://fengshui-api.com/api/v1/';

	function getChineseSignYear(year, month, day){
		console.log(year+" "+month+" "+day);
		alert('year')
		return $.ajax ({
				type:'GET', 
				url: apiBaseUrl + 'findChineseSignOfYear'+'?token=' + token+'&year='+year+'&month='+month+'&day='+day,
				success: function(data) {
					console.log('ajax works2');
					console.log(data);
					$('#year_sign').text(data.result);
					}
			});//ajax

	}
		
	// function getChineseSignMonth(year, month, day){
	// 	console.log(year+" "+month+" "+day);
	// 	alert('month')
	// 	return $.ajax ({
	// 			type:'GET', 
	// 			url: apiBaseUrl + 'findChineseSignOfMonth'+'?token=' + token+'&year='+year+'&month='+month+'&day='+day,
	// 			success: function(data) {
	// 				console.log('ajax works2');
	// 				console.log(data);
	// 				$('#month_sign').text(data.result);
	// 				}
	// 		});//ajax
	// }

	function getAstrologicalAllies(year, month, day){
		console.log(year+" "+month+" "+day);
		alert('month')
		return $.ajax ({
				type:'GET', 
				url: apiBaseUrl + 'findAstrologicalAllies'+'?token=' + token+'&year='+year+'&month='+month+'&day='+day,
				success: function(data) {
					console.log('ajax works2');
					console.log(data);
					$('#allies').text(data.result);
					}
			});//ajax
	}
	// function getLoShu(day, month, year){
	// 	alert('day! : ' + day)
	// 	return $.ajax ({
	// 			type:'GET', 
	// 			url: 'https://fengshui-api.com/api/v1/'+functionName+'?token='+token+ '&year='+year+'&month='+month+'&day='+day,
	// 			success: function(data) {
	// 			$('#loshu').text(data.result[1]);
	// 				console.log(data)
	// 				console.log('ajax works');

	// 				}
	// 		});//ajax
	// } //getLoSHo
		
	return {
		//getLoShu:getLoShu,
		//getChineseSignYear:getChineseSignYear,
		//getChineseSignMonth:getChineseSignMonth
		getAllies:getAstrologicalAllies
	}

})(); // apiService





