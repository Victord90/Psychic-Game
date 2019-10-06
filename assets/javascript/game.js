let answer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let userGuess = "";
let computerGuess = "";
let correct = false;
let maxGuess = 10;
let wins = 0;
let losses = 0;





    


////////////////*************Start of game************************////////////////////////////////
function restart() {
    computerGuess = answer[Math.floor(Math.random()*answer.length)];
    console.log(computerGuess);
    (maxGuess = 10);
    document.getElementById("wrong-gif").src= "";
    document.getElementById("right-gif").src= "";
    setup();
    
}


function setup() {
    computerGuess = answer[Math.floor(Math.random()*answer.length)];
    console.log(computerGuess);
    (maxGuess = 10);


        document.onkeyup = function() {
            userGuess = event.key;
            console.log(userGuess);
            if ( userGuess === computerGuess){
                wins++;
                correct = true;
                rightGif();
                setup();
                
                      
            }else{
                maxGuess--;
                wrongGif();
                

            }
            if ( maxGuess === 0) {
                losses++;
                wrongGif();
                setup();

            }
            
            document.getElementById("userchoice-text").innerHTML = "Your choice: " + userGuess;
            document.getElementById("wins-text").innerHTML = "wins: " + wins;
            document.getElementById("loss-text").innerHTML = "losses: " + losses;
            document.getElementById("guesses-remaining").innerHTML = "Guesses remaining: " + maxGuess;
           
        }

        }

        function wrongGif() {
            document.getElementById("wrong-gif").src= "https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif";
            document.getElementById("right-gif").src= "";
        } {
        function rightGif() {
            document.getElementById("right-gif").src= "https://media0.giphy.com/media/hTerI4FpPtJg4/giphy.gif";
            document.getElementById("wrong-gif").src= "";
        }
    }

restart()