$( document ).ready(function() {
	
	// generates a number between 2-21
  function randomNumber(){ 
  	computerGuesses= Math.floor(Math.random()*(21-2+1)+2);
   };

   randomNumber();
   // stores users guess
	var userGuess = 0;
	var wins = 0;
	var losses = 0;
	var ties = 0;



// enables the stop button
$('#stopButton').on('click',function(){
// diplasy the computers guess after button is clicked 
$('#computerGuess').html('Computers Number: ' + computerGuesses);

if(userGuess>computerGuesses){
	// redirects user to a different page 
	alert('you win!');
	wins += 1;
	$('#Wins').html('Wins: ' + wins);
	userGuess = 0;
	$('#total').html('Your total is: ' + userGuess);
	$('#computerGuess').html('Computers Number: ');
	randomNumber();
	}
else if(userGuess < computerGuesses){
	window.open('lose.html', '_blank');
	alert('you lose!');
	losses += 1;
	$('#Loses').html('Losses: ' + losses);
	userGuess = 0;
	$('#total').html('Your total is: ' + userGuess);
	$('#computerGuess').html('Computers Number: ');
	randomNumber();
}
else{
	alert("It's a tie!");
	ties += 1;
	$('#Ties').html('Ties: ' + ties);
	userGuess = 0;
	$('#total').html('Your total is: ' + userGuess);
	$('#computerGuess').html('Computers Number: ');
	randomNumber();
};
});






 

$('#image1').on('click', function(){
userGuess +=9;
  var div = $("#image1");
        div.animate({height: '300px', opacity: '0.4'}, "slow");
        div.animate({width: '300px', opacity: '0.8'}, "slow");
        div.animate({height: '100px', opacity: '0.4'}, "slow");
        div.animate({width: '100px', opacity: '0.8'}, "slow");
$('#total').html('Your total is: ' + userGuess);
});


$('#image2').on('click', function(){
userGuess +=4;
$('#total').html('Your total is: ' + userGuess);

});
$('#image3').on('click', function(){
userGuess +=7;
$('#total').html('Your total is: ' + userGuess);

});
$('#image4').on('click', function(){
userGuess +=11;
$('#total').html('Your total is: ' + userGuess);

});

//This doesn't work, need to find out why!!!
if( userGuess == 21){
	alert("you win!");
}
else if(userGuess > 21){
	alert('You lose!')
}
else{

};

var music = $('#themeMusic');

// the music button
$('#music').on('click', function(){
music.pause();
})









});




