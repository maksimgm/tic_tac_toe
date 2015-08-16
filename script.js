// window.onload{

// }

var turn = true;
var letter = 'letter_x.jpeg';
var oneBox = document.querySelectorAll(".row .box");

addXsAndOs();

function changeTurn(){
  turn = !turn;
}



function turnChanger(){
  if (turn) {
    letter = 'letter_o.jpeg';
  }else{
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
    oneBox[i].addEventListener('click',function(){
      this.querySelector('img').src = letter;
      this.querySelector('img').style.height="180px";
      this.querySelector('img').style.width="180px";
      // prevent override on existing clicks
      // if ('selected'){
        // this.classList.add('selected');
        // how do i prevent the override of other clicks???
      // }else if(!'selected'){
        // 
      // }

      // this.querySelector(oneBox).classlist.add
      // this.classList.add('selected');
      turnChanger();
      changeTurn();
    });
  }  
}


// determine winner

// winning combinations [[1,2,3],[4,5,6],[7,8,9],[1,5,9],[9,5,1]]
//  for(var i = 0; i<arr.length; i++){
//   for(var j = 0; j<arr[i].length; j++){
//     console.log(arr[i][j]);
//   }
// }

// RESETER

// function reset(){
  // var button = document.getElementById('reset') 
// button.addEventListener('click', function remove()
// 
//  for(var i =0; i<oneBox.length; i++){
//    oneBox[i].classList.remvoe('selected');
//    this[i].querySelector('img').style='';
// }
// });
// }






