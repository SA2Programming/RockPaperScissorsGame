let userScore = 0;
let compScore = 0;
let scoreboard_div = document.querySelector('.scoreboard')
let result_div = document.querySelector('.result');
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");
const userScorehtml = document.getElementById('user-score');
const compScorehtml = document.getElementById('comp-score');
    
function getcomputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function game(userChoice) {
    const computerChoice = getcomputerChoice();
    switch (userChoice + computerChoice) {
        case 'rs':
        case 'pr':
        case 'sp':
            win(userChoice, computerChoice);
            break;
        case 'sr':
        case 'rp':
        case 'ps':
            loss(userChoice, computerChoice);
            break;
        case 'ss':
        case 'pp':
        case 'rr':
            draw(userChoice, computerChoice);
            break;
    }
}

main();
function main() {
    rock.addEventListener('click', function(){
        game("r")
    })
    paper.addEventListener('click', function(){
        game("p")
    })
    scissors.addEventListener('click', function(){
        game("s")
    })
}
 
function win(userChoice, computerChoice) {
    userScore ++;
    userScorehtml.innerHTML = userScore;
    compScorehtml.innerHTML = compScore;
    result_div.innerHTML = `${convertToWord(userChoice)} beats ${convertToWord(computerChoice)}. You Win!`;
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('green-glow');}, 500)
    if (userScore === 10) {
        result_div.innerHTML = 'You Won! Well Done. Play Again?'
        userScore = 0;
        compScore = 0;
    }
}


function loss(userChoice, computerChoice) {
    compScore ++;
    compScorehtml.innerHTML = compScore;
    userScorehtml.innerHTML = userScore;
    result_div.innerHTML = `${convertToWord(computerChoice)} beats ${(convertToWord(userChoice))}. You lose!`;
    document.getElementById(userChoice).classList.add('red-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('red-glow');}, 500)
    if (compScore === 10) {
        result_div.innerHTML = 'Computer Won! Try Again?'
        setTimeout(function(){ userScore = 0; compScore = 0;}, 2000);
    }
}

function draw(userChoice, computerChoice) {
    result_div.innerHTML = "It's a Draw!";
    document.getElementById(userChoice).classList.add('grey-glow');
    setTimeout(function() {document.getElementById(userChoice).classList.remove('grey-glow');}, 500)

}

function convertToWord(letter) {
    if (letter === 'r') {
        return 'Rock';
    } else if (letter === 's') {
        return 'Scissors';
    } else {
        return 'Paper';
    }
}