
function startGame(){
let firstCard = 10;
let secondCard = 11;

let sum = firstCard + secondCard;

let blackJack = false;

document.getElementById("sum").textContent ="sum:" + sum;
document.getElementById("cards").textContent ="cards:"+ firstCard +" and "+ secondCard;
if (sum < 21) {
   document.getElementById("message").textContent ="Do you want to draw a new card !?😊";
}else if(sum === 21){
    document.getElementById("message").textContent = "wohhoo!! you've got the black jack !!🥳"  ;
    blackJack = true;

    console.log(blackJack);
}else if( sum>21){
    document.getElementById("message").textContent = " you are out of the game !!😞";
}}
