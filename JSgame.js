/* CODING CHALLENGES 
1.) A player looses his ENTIRE score when he rolls two 6 in a row. After
  that, it's the next player' turn (Hint: Always save the previous dice 
  in a separate variable)
2.) Add an input field to the HTML where players can set the winning score
  so that they can change the predefined score of 100. (Hint: you read
  that value with .value property in JavaScript.)
3.) Add another dice to the game, so that there are two dices now. The
  player looses his current score when one of them is a 1. (Hint: you will
  need CSS to position the second dice, so take a look at the CSS code
  for the first one.)
*/

// PART 1 & 2
var score = [0,0];
var player = 0;
var lscore = 0;
var gameplay = true;

document.querySelector(".box3_hold").addEventListener("click",hold);
document.querySelector(".box1_new").addEventListener("click",new_game);

document.querySelector(".box2_roll").addEventListener( 'click', function(){
  if(gameplay){
    var x = Math.floor(Math.random()*6)+1 ;
    var y = Math.floor(Math.random()*6)+1 ;
    document.querySelector(".dice_img").src = x+'.png' ;
    document.querySelector(".dice_img2").src = y+'.png' ;
    if(x==1 || y==1){
      lscore=0;
      document.querySelector("#current_score"+player).textContent = lscore;
      hold();
    }else if(x==6 && y==6){
      score[player]=0;
      document.querySelector(".score"+player).textContent = score[player];
      lscore=0;
      document.querySelector("#current_score"+player).textContent = lscore;
    }
    else{
      lscore = lscore + x + y;
      document.querySelector("#current_score"+player).textContent = lscore;
    }
  }
})

function hold(){
  score[player]=score[player]+lscore;
  document.querySelector('.dice_img').src = '0.png';
  document.querySelector('.dice_img2').src = '0.png';
  document.querySelector('.score'+player).textContent = score[player];
  lscore=0;
  document.querySelector('#current_score'+player).textContent = lscore;
  inp=document.querySelector('#input').value;
  if(inp){
    var winscore = inp;
  }
  else{
    var winscore = 100;
  }
  if(score[player]<winscore){
    if(player==0){
      player=1;
      document.querySelector('#point1').style.display = 'block';
      document.querySelector('#point0').style.display = 'none';
      document.querySelector('.player1').style.background = 'rgb(255, 255, 255)';
      document.querySelector('.player0').style.background = 'rgb(228, 228, 228)';
    }else if(player==1){
      player=0;
      document.querySelector('#point0').style.display = 'block';
      document.querySelector('#point1').style.display = 'none';
      document.querySelector('.player0').style.background = 'rgb(255, 255, 255)';
      document.querySelector('.player1').style.background = 'rgb(228, 228, 228)';
    }else{console.log('Problem occured!');}
  }
  else if(score[player]>=winscore){
    document.querySelector('#win'+player).style.display = 'block';
    gameplay = false;
  }else{console.log("PROBLEM OCCURED!");}
}

function new_game(){
  score = [0,0];
  player = 0;
  lscore = 0;
  gameplay = true;
  document.querySelector('.player0').style.background = 'rgb(255, 255, 255)';
  document.querySelector('.player1').style.background = 'rgb(228, 228, 228)';
  document.querySelector('#point0').style.display = 'block';
  document.querySelector('#point1').style.display = 'none';
  document.querySelector('#current_score0').textContent = '0';
  document.querySelector('#current_score1').textContent = '0';
  document.querySelector('.score0').textContent = '0';
  document.querySelector('.score1').textContent = '0';
  document.querySelector('.dice_img').src = '0.png';
  document.querySelector('.dice_img2').src = '0.png';
  document.querySelector('#win0').style.display = 'none';
  document.querySelector('#win1').style.display = 'none';
}

