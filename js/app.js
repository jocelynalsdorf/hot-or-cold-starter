
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function() {
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


/*---generate a random number between 1-100 too start the game---*/

	

	$(".new").on("click",function() {
	
	//create function newGame() {}
	function newNum() {
    return Math.floor(Math.random() * (100)) + 1;
	}
	var randomNum = newNum();
	alert(randomNum);

	});



/*--- take input from user and append to list ---*/

$('form').submit(function(event) {
     event.preventDefault();
	   var textValue = $("#userGuess").val();
	   var x = textValue; 
     if (textValue ==="" || textValue <= 0 || textValue > 100 || (isNaN(x))) {
       alert("enter a number between 1-100");
     }
     else {
     
     	$("#guessList").append("<li class=\"guess-items\"><span>" + textValue + "</span></li>");
			}
	});



	});


