let answer = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
let userGuess = "";
let computerGuess = "";
let correct = false;
let maxGuess = 10;
let wins = 0;
let losses = 0;





    


////////////////*************Start of game************************////////////////////////////////



function setup() {
    computerGuess = answer[Math.floor(Math.random()*answer.length)];
    console.log(computerGuess);
    (maxGuess = 10);






        document.onkeyup = function(event) {
            userGuess = event.key;
            console.log(userGuess);
            if ( userGuess === computerGuess){
                wins++;
                setup();      
            }else{
                maxGuess--;

            }
            if ( maxGuess === 0) {
                losses++;
                wrongGif();
            

            }
            
            document.getElementById("userchoice-text").innerHTML = "Your choice: " + userGuess;
            document.getElementById("wins-text").innerHTML = "wins: " + wins;
            document.getElementById("loss-text").innerHTML = "losses: " + losses;
            document.getElementById("guesses-remaining").innerHTML = "Guesses remaining: " + maxGuess;
           
        }

        }

        function wrongGif() {
            document.getElementById("wrong-gif").innerHTML = img=("https://media.giphy.com/media/TPl5N4Ci49ZQY/giphy.gif")
        }

setup();