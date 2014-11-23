
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
	

	



/*--- take input from user and append to list ---*/


	var count = 0;



	$('form').submit(function(event) {
    event.preventDefault();
	var textValue = $("#userGuess").val();
	var x = textValue; 

 	    	 
 	function countTries() {
    document.getElementById("count").innerHTML = ++count;
    } 

    
    
    if (textValue ==="" || textValue <= 0 || textValue > 100 || (isNaN(x))) {
    alert("enter a number between 1-100");
    }

    else {
    $("#guessList").append("<li class=\"guess-items\"><span>" + textValue + "</span></li>");
	return countTries();	
	
	}
              
	});
	
/*----------give user input on guess-------*/




$(".button").on("click", function() {
	var textValue = $("#userGuess").val();
var p = Math.abs(textValue - randomNum);
function between(p, min, max) {
    return p >= min && p <= max;	

	  }

if (p === 0) {
    document.getElementById("feedback").innerHTML = "You win!!";
    var replay = prompt("play again? Enter yes or no");
    if(replay === "yes") {
    	window.location.reload();
    }

 } 
else if (between(p, 50 , 100))  {
     document.getElementById("feedback").innerHTML = "Ice cold!!";

 }
    
else if (between(p, 30 , 49))  {
	  document.getElementById("feedback").innerHTML = "cool!!";

 }
    
else if (between(p, 20 , 29))  {
     document.getElementById("feedback").innerHTML = "Warm!!";

 } 

 else if (between(p, 10 , 19))  {
     document.getElementById("feedback").innerHTML = "Warmer!!";

 } 

else  if (between(p, 5 , 9)) {
    document.getElementById("feedback").innerHTML = "Hot!!";
 }

 else  if (between(p, 1 , 4)) {
    document.getElementById("feedback").innerHTML = "Super hot!!";
 }
 
 else { 
    }

   });
 
 });

});


