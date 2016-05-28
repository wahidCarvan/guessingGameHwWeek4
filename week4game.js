$( document ).ready(function() {
	
	// generates a number between 2-21
 
  var	computerGuesses= Math.floor(Math.random()*(21-2+1)+2);
  

   
   // stores users guess
	var userGuess = 0;
	var wins = 0;
	var losses = 0;
	var ties = 0;
	var guessArray = [];



// enables the stop button
$('#stopButton').on('click',function(){
// diplasy the computers guess after button is clicked 
$('#computerGuess').html('Computers Number: ' + computerGuesses);

 if(userGuess > 21){
	alert("You Busted!");
	window.location.href = 'lose.html';
} else if(userGuess > computerGuesses){
	// redirects user to a different page
	window.location.href = 'wins.html'; 
	alert('you win!');
	wins += 1;
	$('#Wins').html('Wins: ' + wins);
	userGuess = 0;
	$('#total').html('Your total is: ' + userGuess);
	$('#computerGuess').html('Computers Number: ');
	
	}else if(userGuess < computerGuesses){
	window.location.href = 'lose.html';
	alert('you lose!');
	losses += 1;
	$('#Loses').html('Losses: ' + losses);
	userGuess = 0;
	$('#total').html('Your total is: ' + userGuess);
	$('#computerGuess').html('Computers Number: ');
	}else {
	    alert("It's a tie!");
	    ties += 1;
	    $('#Ties').html('Ties: ' + ties);
	    userGuess = 0;
	    $('#total').html('Your total is: ' + userGuess);
	    $('#computerGuess').html('Computers Number: ');
	    randomNumber();
	};
	});



// how to add toggle to animate and how to generate random numbers after each game
	$('#image1').on('click', function() {
		// 11 is the max number minus minumum number plus 1 plus minum number
	   handleClick();  
});


	$('#image2').on('click', function() {
	   handleClick();

	});
	$('#image3').on('click', function() {
	   handleClick();
	    
	});
	$('#image4').on('click', function() {
	   handleClick();

	});

	function handleClick(){
		  var card = Math.floor(Math.random()*(11-1+1)+1);
	    guessArray.push(card);
	    console.log(guessArray);

	    userGuess = userGuess + card;
	    $('#total').html('Your total is: ' + userGuess);
	  };
	//This doesn't work, need to find out why!!!
	if (userGuess == 21) {
	    alert("you win!");
	} else if (userGuess > 21) {
	    alert('You lose!')
	} else {

	};

	var music = $('#themeMusic');

	// the music button
	$('#music').on('click', function() {
		$('#themeMusic').stop();
	});




	});


