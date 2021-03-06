// var invocation = new XMLHttpRequest();
// var url = 'https://fengshuiyolife.herokuapp.com/';
   
// function callOtherDomain() {
//   if(invocation) { 
//   	console.log('callOtherDomain working')   
//     invocation.open('GET', url, true);
//     invocation.onreadystatechange = handler;
//     invocation.send(); 
//   }
// }



// doc ready file for jquery & js
$(document).ready(function() {
	console.log("doc ready loaded")

	domService.material();
	//	morganApi.search();

	$('#submit_btn').click(function(e){
		e.preventDefault();
		// alert('submit');
		var day = $('#day').val();
		var year =  $('#year-input').val();
		var month = $('#month-input').val();
		console.log('do we know day: ' + day+ " " + month + " "+ year)

		apiService.getChineseSignYear(year, month, day);
		 apiService.getChineseSignMonth(year,month,day);
		 apiService.getAstrologicalAllies(year,month,day);
		 apiService.getPeachBlossomAnimal(year,month,day);
		// callOtherDomain();
	}); // submit btn

	//on click for delete
		//idtodelete =  $(this).attr('data_id')
		//delete from results where id = idtodelete 
	// $('#deletesearch').on('click', function(e){
	// 	e.preventDefault();
	// 	idtodelete =  $(this).attr('data_id');
	// 	div = $(this).parent()
 //    	$.ajax({
	//       "url":"http://localhost:3000/results",
	//       "method":"DELETE",
	//       "success":function(){
	//         $(div).remove();
	//         console.log('delete ajax worked')
	//     	},
	//     	"error": function(err){
	// 		console.log('error in delete');
	// 		console.log(err);
	// 		}
 //    	});	
	// });


	$('#save_btn').on('click',function(e){
		//debugger
		e.preventDefault();
    	year = $('#year').val();
    	month = $('#month').val();
	   	friend = $('#friend').val();
	   	peach = $('#peach').val();
	   	user_id = $('#id_holder').attr('data-id');
	   	
	   	result = {"year":year,"month":month,"friend":friend,"peach":peach, "user_id":user_id}
	   	console.log(result);
	    $.ajax({
	      "url":"http://localhost:3000/results",
	      "method":"POST",
	      "data": result,
	      "success": function(data){
	      	// debugger
	        console.log('ajax save!!')
	        // console.log(data);
	        $('body').html(data)
	    	},
	    	"error": function(err){
			console.log('error in save');
			console.log(err);
			}
		})//ajax

	})// save button

}); // doc ready

var domService = (function(){

	function addMaterial (){
		$('select').material_select();
	} return {
		material: addMaterial,
	 }

})(); // domService


var apiService = (function(){
	console.log("apiService works")
	var token ='4c69eEEd1dd4dmf192D152c94aj3dc5NO8Ad3y6T';
	//var token = '8E4B59z5b657c26N485Rh9db9j2D321da271CM7d';
	var apiID = '?token=8E4B59z5b657c26N485Rh9db9j2D321da271CM7d';
	var apiBaseUrl ='https://fengshui-api.com/api/v1/';

	function makeCall(functionName, day, month, year){
		console.log("https://fengshui-api.com/api/v1/"+ functionName +"?token="+token+ "&year="+year+"&month="+month+"&day="+day);
		return $.ajax ({
			type:'GET',
			dataType: 'json',
			url: 'https://crossorigin.me/https://fengshui-api.com/api/v1/'+ functionName +'?token='+token+ '&year='+year+'&month='+month+'&day='+day
		});
	} 

	function getChineseSignYear(year, month, day){
			makeCall('findChineseSignOfYear', day, month, year).then(function(res){
			console.log('here?');
			console.log(res)
			$('#year').val(res.result);
			console.log($('#year').val(res.result));
		}, function(err){
			console.log('there was an error year');
			console.log(err);
		});

	}
							
	function getChineseSignMonth(year, month, day){
		makeCall('findChineseSignOfMonth', day, month, year).then(function(res){
			$('#month').val(res.result)
			}, function(err){
				console.log('there was an error month');
				console.log(err);
			});
	}

	function getAstrologicalAllies(year, month, day){
		makeCall('findAstrologicalAllies', day, month, year).then(function(res){
			$('#friend').val(res.result[0] + ", " + res.result[1]);
			console.log(res.result + ", " + res.result[1]);
			}, function(err){
				console.log('there was an error allies');
				console.log(err);
			});
	}

	function getPeachBlossomAnimal(year, month, day){
		makeCall('findPeachBlossomAnimal', day, month, year).then(function(res){
			$('#peach').val(res.result.direction  + ", " + res.result.sign)
			}, function(err){
				console.log('there was an error peach');
				console.log(err);
			});
	}	
	return {
		getPeachBlossomAnimal:getPeachBlossomAnimal,
		getChineseSignYear:getChineseSignYear,
		getChineseSignMonth:getChineseSignMonth,
		getAstrologicalAllies:getAstrologicalAllies
	}

})(); // apiService





