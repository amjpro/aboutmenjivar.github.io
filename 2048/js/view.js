//import Game from "./engine/game";
//import Game from "../game.js";
//import keypress from 'keypress';

let game = new Game(4); 
const loadIntoDOM = function(curr) {
    const $root = $('#game');
    let div = `
<tr>
     <td class = "td${game.board[0]}">${game.board[0]}</td>
     <td class = "td${game.board[1]}">${game.board[1]}</td>
     <td class = "td${game.board[2]}">${game.board[2]}</td>
     <td class = "td${game.board[3]}">${game.board[3]}</td>
 </tr>
 <tr>
     <td class = "td${game.board[4]}">${game.board[4]}</td>
     <td class = "td${game.board[5]}">${game.board[5]}</td>
     <td class = "td${game.board[6]}">${game.board[6]}</td>
     <td class = "td${game.board[7]}">${game.board[7]}</td>
 </tr>
 <tr>
     <td class = "td${game.board[8]}">${game.board[8]}</td>
     <td class = "td${game.board[9]}">${game.board[9]}</td>
     <td class = "td${game.board[10]}">${game.board[10]}</td>
     <td class = "td${game.board[11]}">${game.board[11]}</td>
 </tr>
 <tr>
     <td class = "td${game.board[12]}">${game.board[12]}</td>
     <td class = "td${game.board[13]}">${game.board[13]}</td>
     <td class = "td${game.board[14]}">${game.board[14]}</td>
     <td class = "td${game.board[15]}">${game.board[15]}</td>
 </tr>`
$(div).appendTo($root);
let div2 = `<div id = "score">Score: ${curr.score}</div>`
$("#score").replaceWith(div2)
$( "#reset" ).on( "click", handleResetButtonPress);
};

function handleResetButtonPress(event){
    game = new Game(4);
    let div = `<table name = "game" id = 'game' border = "1" style ="margin-left: auto; margin-right: auto;">
    <tr>
         <td class = "td${game.board[0]}">${game.board[0]}</td>
         <td class = "td${game.board[1]}">${game.board[1]}</td>
         <td class = "td${game.board[2]}">${game.board[2]}</td>
         <td class = "td${game.board[3]}">${game.board[3]}</td>
     </tr>
     <tr>
         <td class = "td${game.board[4]}">${game.board[4]}</td>
         <td class = "td${game.board[5]}">${game.board[5]}</td>
         <td class = "td${game.board[6]}">${game.board[6]}</td>
         <td class = "td${game.board[7]}">${game.board[7]}</td>
     </tr>
     <tr>
         <td class = "td${game.board[8]}">${game.board[8]}</td>
         <td class = "td${game.board[9]}">${game.board[9]}</td>
         <td class = "td${game.board[10]}">${game.board[10]}</td>
         <td class = "td${game.board[11]}">${game.board[11]}</td>
     </tr>
     <tr>
         <td class = "td${game.board[12]}">${game.board[12]}</td>
         <td class = "td${game.board[13]}">${game.board[13]}</td>
         <td class = "td${game.board[14]}">${game.board[14]}</td>
         <td class = "td${game.board[15]}">${game.board[15]}</td>
     </tr>
         </table>`
        $('#game').replaceWith(div);
        upscore(game)
}
function moving(game) {let div = `<table name = "game" id = 'game' border = "1" style ="margin-left: auto; margin-right: auto;">
<tr>
     <td class = "td${game.board[0]}">${game.board[0]}</td>
     <td class = "td${game.board[1]}">${game.board[1]}</td>
     <td class = "td${game.board[2]}">${game.board[2]}</td>
     <td class = "td${game.board[3]}">${game.board[3]}</td>
 </tr>
 <tr>
     <td class = "td${game.board[4]}">${game.board[4]}</td>
     <td class = "td${game.board[5]}">${game.board[5]}</td>
     <td class = "td${game.board[6]}">${game.board[6]}</td>
     <td class = "td${game.board[7]}">${game.board[7]}</td>
 </tr>
 <tr>
     <td class = "td${game.board[8]}">${game.board[8]}</td>
     <td class = "td${game.board[9]}">${game.board[9]}</td>
     <td class = "td${game.board[10]}">${game.board[10]}</td>
     <td class = "td${game.board[11]}">${game.board[11]}</td>
 </tr>
 <tr>
     <td class = "td${game.board[12]}">${game.board[12]}</td>
     <td class = "td${game.board[13]}">${game.board[13]}</td>
     <td class = "td${game.board[14]}">${game.board[14]}</td>
     <td class = "td${game.board[15]}">${game.board[15]}</td>
 </tr>
     </table>`
$('#game').replaceWith(div);
}
function winning(game){
    if (game.won){
        let div = `<div id = 'root'>You Won, Nice!</div>`
        $('#root').replaceWith(div);
    }
}
function losing(game){
    if (game.over){
        let div = `<div id = 'root'>You Lost, Darn!</div>`
        $('#root').replaceWith(div);
    }
}
$(function() {
    loadIntoDOM(game);
});
const upscore = function(game){
    $("#score").replaceWith(`<div id = "score">Score: ${game.score}</div>`);
}
window.addEventListener('keydown', (event) => {
    	switch(event.key){
            case 'ArrowUp': game.move('up'); moving(game); winning(game); losing(game); upscore(game);break;
    		case 'ArrowDown': game.move('down'); moving(game); winning(game); losing(game); upscore(game);break;
    		case 'ArrowLeft': game.move('left'); moving(game); winning(game); losing(game); upscore(game);break;
            case 'ArrowRight': game.move('right'); moving(game); winning(game); losing(game); upscore(game);break;
        }
});

//<embed src = "Exploration_1.mp3" autostart = "true" loop = "true" height = "0" width = '0'>

//game.onMove(moving);
//         let div = `<table name = "game" id = 'game' border = "1" style ="margin-left: auto; margin-right: auto;">
//         <tr>
//              <td>${game.board[0]}</td>
//              <td>${game.board[1]}</td>
//              <td>${game.board[2]}</td>
//              <td>${game.board[3]}</td>
//          </tr>
//          <tr>
//              <td>${game.board[4]}</td>
//              <td>${game.board[5]}</td>
//              <td>${game.board[6]}</td>
//              <td>${game.board[7]}</td>
//          </tr>
//          <tr>
//              <td>${game.board[8]}</td>
//              <td>${game.board[9]}</td>
//              <td>${game.board[10]}</td>
//              <td>${game.board[11]}</td>
//          </tr>
//          <tr>
//              <td>${game.board[12]}</td>
//              <td>${game.board[13]}</td>
//              <td>${game.board[14]}</td>
//              <td>${game.board[15]}</td>
//          </tr>
//              </table>`
//         $('#game').replaceWith(div);
//  });
// game.onWin(() => {
//     if (game.won){
//         let div = `<div id = 'root'>You Won, Nice!</div>`
//         $('#root').replaceWith(div);
//     }
// });
// game.onLose(() => {
//     if (game.over){
//         let div = `<div id = 'root'>You Lost, Darn!</div>`
//         $('#root').replaceWith(div);
//     }
// });