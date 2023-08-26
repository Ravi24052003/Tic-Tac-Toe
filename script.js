console.log("Welcome to Tic Tac Toe");

let music = new Audio("music.mp3");
let ting = new Audio("ting.mp3");
let gameOver = new Audio("gameover.mp3");

let turn = "X";

let isgameOver = false;

// music.play();

// function to change the turn
// function changeTurn(){
//     //  return turn === "X"? "0" : "X"

//     if(turn === "X"){
//       return "0";
//     }
//     else{
//       return "X";
//     }
// }

// function to check for a win
let boxtexts = document.getElementsByClassName("boxtext");
function checkWin(){
      let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
      ]
      
      wins.forEach(e =>{
        if((boxtexts[e[0]].innerText === boxtexts[e[1]].innerText) && (boxtexts[e[1]].innerText === boxtexts[e[2]].innerText) && boxtexts[e[0]].innerText !== ""){
            document.querySelector(".info").innerText = boxtexts[e[0]].innerText + " Won";
            isgameOver = true;

            document.querySelector(".imgBox").getElementsByTagName("img")[0].style = "width: 200px";
        }
      })
}

// Game Logic
// let boxes = document.getElementsByClassName("box");
// Array.from(boxes).forEach((element)=>{
//     let boxtext = element.querySelector(".boxtext");
//     element.addEventListener("click", ()=>{
//         if(boxtext.innerText === ""){
//             boxtext.innerText = turn;
//            turn = changeTurn();
//             ting.play();
//             checkWin();
//             if(isgameOver === false){
//                 document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
//             }
//         }
//     })

// })

let boxes = document.getElementsByClassName("box");

for(let i=0; i<boxes.length;i++){
  boxes[i].addEventListener("click", (e)=>{
    if(boxtexts[i].innerText === ""){
      if(turn === "X"){
        boxtexts[i].innerText = turn;
        turn = "0";
      }
      else{
        boxtexts[i].innerText = turn;
        turn = "X";
      }
      ting.play();
      checkWin();
      if(isgameOver === false){
        document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
      }
    }
  })
}


// Add onclick listner to reset button
let reset = document.getElementById("reset");

reset.addEventListener("click", (e)=>{
      Array.from(boxtexts).forEach((elements)=>{
        elements.innerText = "";
      });
      turn = "X";
      isgameOver = false;
      document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
      document.querySelector(".imgBox").getElementsByTagName("img")[0].style = "width: 0px";
})