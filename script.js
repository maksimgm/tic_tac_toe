var playerX = {};
var playerO = {};
var turn = true;
var letter = 'letter_x.jpeg';
var oneBox = document.querySelectorAll(".row .box");
addXsAndOs();
reset();


function changeTurn(){
  turn = !turn;
}


function turnChanger(){
  if (turn) {
    //playerO is global 
    letter = 'letter_o.jpeg';
  }else{
    //playerX is global
    letter = 'letter_x.jpeg';
  }
}

// prevent a player from clicking on 
// 2 parts to addclasslist
// add selected class, on click
// set a condition, not to execute img src change, if the box already ahs the class

// target .box to display x when clicked

function addXsAndOs(){
  for (var i =0; i<oneBox.length; i++) {
    oneBox[i].square = i;
    oneBox[i].addEventListener('click',function(){
      if (!this.move){
        this.querySelector('img').src = letter;
        this.move = letter;
        //currentPlayer.indexString = true
        if(turn){
          playerX[this.square] = true;
        }else{
          playerO[this.square] = true;
        }
        // playerX[this.square] = true;
        
        // playerO[this.square] 
        turnChanger();
        changeTurn();
        winningCombination();
      }
    });
  }  
}


function reset(){
  var button = document.getElementById('reset'); 
  button.addEventListener('click', function remove(){
  for(var i =0; i<oneBox.length; i++){
    oneBox[i].querySelector('img').src = '';
    oneBox[i].move = '';
    playerX = {};
    playerO = {};
    }
  });
}
// determine winner

 // winning combinations 
 var arr = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
 
 function winningCombination(){
  for(var i = 0; i<arr.length; i++){
    if (playerX[arr[i][0]] && playerX[arr[i][1]] && playerX[arr[i][2]]){
      alert("Player X Wins!!!");
    }
    if (playerO[arr[i][0]] && playerO[arr[i][1]] && playerO[arr[i][2]]){
      alert("Player O Win!!!");
    }
  }
}