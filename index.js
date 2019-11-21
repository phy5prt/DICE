// var player1Img = "images/dice"+((Math.floor(Math.random()*6))+1)+".png";
// var player2Img = "images/dice"+((Math.floor(Math.random()*6))+1)+".png";
var player1Roll = ((Math.floor(Math.random()*6))+1);
var player2Roll = ((Math.floor(Math.random()*6))+1);

var player1Img = "images/dice"+player1Roll+".png";
var player2Img = "images/dice"+player2Roll+".png";

console.log("player1Img " + player1Img + " player2Img "+player2Img );

//doesnt work
// document.querySelector("img1").setAttribute("src", "player1Img");
// document.querySelector("img2").setAttribute("src", "player2Img");

//works
// document.querySelector("img.img1").setAttribute("src", "images/dice"+((Math.floor(Math.random()*6))+1)+".png");
// document.querySelector("img.img2").setAttribute("src","images/dice"+((Math.floor(Math.random()*6))+1)+".png");

document.querySelector("img.img1").setAttribute("src", player1Img);
document.querySelector("img.img2").setAttribute("src", player2Img);

var titleString;
if(player1Roll === player2Roll){titleString = "Draw";}
if(player1Roll<player2Roll){titleString = "Player 2 Won";}
if(player1Roll>player2Roll){titleString = "Player 1 Won";}
console.log(titleString);
document.querySelector("h1").textContent = titleString;
