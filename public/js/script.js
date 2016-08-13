var domService = (function(){

	var _saveBtn =$('#save_btn');
	var _submitBtn =$('#submit_btn');

	var _genderInput =$('#gender');
	var _yearInput =$('#year');
	var _monthInput =$('#month');
	var _dayInput =$('#day');

	var _periodInput=$('#period');
	var _facingInput =$('#facing');

	


});

	function _apiService(){
		var _apiID = 'f737Ie15310mGZ7N2l61f2661eBF905c2NC51x86';
		var _apiBaseUrl ='https://fengshui-api.com/api/v1/findChineseSignOfYear?';
		function _constructUrl(){
			return _apiBaseUrl + 'token=' + _apiID + '&year='+ '&month=' + '&day=' + '&gender=';
	};
	function _makeRequest(url, type){
		return $.ajax (
			{ type:'GET', 
			url: _constructUrl 
			}); 
	}

           


$(document).ready(function() {
  console.log("script loaded")

	function addMaterial(){
		$('select').material_select();
	};
	addMaterial




});

