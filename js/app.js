
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
     alert("You win!!");

 } 
else if (between(p, 50 , 100))  {
     alert("ice cold");

 }
    
else if (between(p, 30 , 49))  {
	  alert("cool");

 }
    
else if (between(p, 10 , 30))  {
     alert("warm");

 } 
  
else  if (between(p, 1 , 29)) {
     alert("hot");
 }

 else {
 
 
}
});
});
	});


