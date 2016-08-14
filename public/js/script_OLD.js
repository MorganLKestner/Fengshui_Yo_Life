//var domService = (function(){
	console.log('domService works');
//variables for appending onto the dom
	var saveBtn =$('#save_btn');


	var periodInput=$('#period');
	var facingInput =$('#facing');
// var selectGender =$('#select-gender');
// 	var genderInput = function(){
// 	  if (selectGender.val() === 'male') {
//   			return var maleValue = 0;
//     } else if (selectGender.val() === 'female') {
//     } else if (selectGender.val() === 'female') {
//      	return	var femaleValue = 1;
//       };
//    };
	

//});

//contructing query URL with the input added from these functions

	var apiService = function(){
		console.log("apiService works")
		var apiID = '?token=f737Ie15310mGZ7N2l61f2661eBF905c2NC51x86';
		var apiBaseUrl ='https://fengshui-api.com/api/v1/';
		var submitBtn =$('#submit_btn');
		var yearInput =$('#year');
		var monthInput =$('#month');
		var dayInput =$('#day');
		//input functions 	
		function findChineseSignOfDay(year, month, day) {
			console.log('yourdaysign');
			return apiBaseUrl + 'findChineseSignOfDay' +  apiID + '&year=' + year + '&month=' +month + '&day=' +day;
		}; //day

		console.log(yearInput.val(), monthInput.val(), dayInput.val());

		var url = findChineseSignOfDay(yearInput.val(),monthInput.val(),dayInput.val())
				//ajax call
		function makeRequest(){
			console.log('makeRequest')
			return $.ajax ({
				type:'GET', 
				url: url,
				success: function(data) {
					console.log(data)
					console.log('ajax works');

				}
			}); 
		}
		makeRequest();
		


		// function getFlyingStar(period, facing){

		// };
		// function getEightMansions(facing){

		// };

		// function getFourBestDirections(kua, gender) {

		// };

		// function getOwnLoShu(year,month, day) {

		// };

		// function findKuaNumber(year, month, day, gender) {
		// 	return _apiBaseUrl + function + '?token=' + _apiID + '&year=' + year;
	

	// var getGender = function(){
		//  if ($('select-gender').val === 'male') {
		//  	return  0;
		//  }else { return 1};
		// }
		// var gender = getGender();
		

		// };
		// function findChineseSignOfMonth( year, month, day) {

		// };

		// function findChineseSignOfYear(year, month, day) {

		// };
		


}// end of apiService function

           

// doc ready file for jquery & js
$(document).ready(function() {
	//domService();
  console.log("doc ready loaded")
	var addMaterial = function (){
		$('select').material_select();
	};
	addMaterial();

	$('#submit_btn').on('click', function(e){
		e.preventDefault();
				console.log("submit works")

		apiService();
	}); //submit button 
	


});

	// var _paramDictionary = [];
	// 		_paramDictionary['year'] = '1999';
	// 		_paramDictionary['month'] = 'May';
	// 		_paramDictionary['day'] = '13';
	// 		var _reqUrl = _constructUrl(_paramDictionary);

// for (var key in params) {
// 			  if (params.hasOwnProperty(key)) {
// 			    _qs = params + _apiID + '&' + key + '=' + value;
// 			  }
// 			}
// 			return _finalUrl + _qs;