
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});


/*---generate a random number between 1-100 too start the game---*/

	

	$(".new").on("click",function() {
	function getNum() {
    return Math.floor(Math.random() * (100)) + 1;
	}
	var randomNum = getNum();
	alert(randomNum);

	});






/*--- Hide information modal box ---*/

	});


