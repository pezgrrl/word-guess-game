var wordList = [
    "harry", "ron", "hermione", "voldemort", "dumbledore", "hagrid", "hedwig", "gryffindor", "hufflepuff", "slytherin", "ravenclaw", "quidditch", "horcrux", "wand" ];


var chosenWord = ""; 

var lettersInChosenWord = []; 

var numBlanks = 0; 

var blanksAndSuccesses = []; 

var wrongGuesses = []; 

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 12; 

//var pressStart = "";

var audioElement = document.createElement("audio");
    audioElement.setAttribute("src", "Assets/images/hedwigs_theme.mp3");

    $(".theme-button").on("click", function() {
        audioElement.play();
      });
      $(".pause-button").on("click", function() {
        audioElement.pause();
      });


function startGame() { 
    numGuesses = 9;
    blanksAndSuccesses = []; //makes empty at start
    wrongGuesses = []; //makes empty at start

	chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
	lettersInChosenWord = chosenWord.split("");
	numBlanks = lettersInChosenWord.length;
	console.log(chosenWord);
	console.log(numBlanks);

	for (var i = 0; i < numBlanks; i++) {
	    blanksAndSuccesses.push("_");
	}
	console.log(blanksAndSuccesses);
	document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
	document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");

};

function checkLetters(letter){ 
    
    var letterInWord = false;

    for(var i = 0; i < numBlanks; i++){
        if (chosenWord[i] === letter){
            letterInWord = true;

        }
    }

    if(letterInWord){
        for (i = 0; i < numBlanks; i++) {
            if (chosenWord[i] === letter) {
                blanksAndSuccesses[i] = letter;
            }
            console.log("inside our checkletter function", blanksAndSuccesses);
        }
        
    }else{ 
        numGuesses --;
        wrongGuesses.push(letter);
    }
    console.log("our wrong guesses inside our checkletter function", wrongGuesses);
};


function roundComplete() {
   
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");



        console.log(lettersInChosenWord);
        console.log(blanksAndSuccesses);
    	if(lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")){
    		winCounter++;
    		alert("You win!!");
    		document.getElementById('win-counter').innerHTML = winCounter;
    		startGame();
    	}else if(numGuesses === 0){
    		document.getElementById('loss-counter').innerHTML = lossCounter ++;
    		document.getElementById('wrong-guesses').innerHTML = " ";
    		alert("you don't have anymore guesses left");
            playButton.style.visibility = "visible";
    		//startGame();

    	}


    

};
    startGame(); 
    
    document.onkeyup = function(){
        
        
            //alert("press any key to start");
           // console.log("starting game", startGame);
           // var anyLetter = String.fromCharCode(event.keyCode).toLowerCase();
          //  alert ("Press any key to start");*/

        
        var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("this is the letter we type", letterGuessed);
        checkLetters(letterGuessed);
        roundComplete();


        
            

};

var reloadPage = function() {
    var playButton = document.getElementById('play');
    playButton.style.visibility = "hidden";
    startGame();
}