// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
var $turn = 2;
var $box = $(".box");
var $off = false;

// Checks if tile is empty or not and decides player turn
  $(this).find($box).click( function game(event){
    if ($(this).text() === "" && $off === false ){
        if ($turn %2 === 0){
        $(this).text("X");
      } else {
        $(this).text("O");
      }
    $turn = $turn + 1;
    }
    else {
        // If player tries to play on a tile that was already played. It shakes the screen showing playing error.
        console.log("there is text");
        $($box).effect( "shake",{times:2}, 270  );
    }
    // SETTING WINS FOR X
    if (($("#topLeft").text() == "X" && $("#topMid").text()== "X" && $("#topRight").text()== "X")||
        ($("#midLeft").text()== "X" && $("#midMid").text()== "X" && $("#midRight").text()== "X") ||
        ($("#botLeft").text()== "X" && $("#botMid").text()== "X" && $("#botRight").text()== "X") ||
        ($("#topLeft").text()== "X" && $("#midMid").text()== "X" && $("#botRight").text()== "X") ||
        ($("#topRight").text()== "X" && $("#midMid").text()== "X" && $("#botLeft").text()== "X") ||
        ($("#topLeft").text()== "X" && $("#midLeft").text()== "X" && $("#botLeft").text()== "X") ||
        ($("#topMid").text()== "X" && $("#midMid").text()== "X" && $("#botMid").text()== "X")    ||
        ($("#topRight").text()== "X" && $("#midRight").text()== "X" && $("#botRight").text()== "X")){
          console.log("X won");
          $off = true;
          $($box).fadeTo( "slow" , 0.25, function() {
            $("h1").text("WINNER X");

        });
    // SETTING WINS FOR O
      }  if (($("#topLeft").text() == "O" && $("#topMid").text()== "O" && $("#topRight").text()== "O") ||
          ($("#midLeft").text()== "O" && $("#midMid").text()== "O" && $("#midRight").text()== "O") ||
          ($("#botLeft").text()== "O" && $("#botMid").text()== "O" && $("#botRight").text()== "O") ||
          ($("#topLeft").text()== "O" && $("#midMid").text()== "O" && $("#botRight").text()== "O") ||
          ($("#topRight").text()== "O" && $("#midMid").text()== "O" && $("#botLeft").text()== "O") ||
          ($("#topLeft").text()== "O" && $("#midLeft").text()== "O" && $("#botLeft").text()== "O") ||
          ($("#topMid").text()== "O" && $("#midMid").text()== "O" && $("#botMid").text()== "O")    ||
          ($("#topRight").text()== "O" && $("#midRight").text()== "O" && $("#botRight").text()== "O") ){
            console.log("O won");
            $off = true;
            $($box).fadeTo( "slow" , 0.25, function(off) {
              $("h1").text("WINNER O");


          });

         }

  });

 // setting Tie. Buggy Tie
  $(this).find(".box").click( function gameOver(){
    if ($("#topLeft").text() &&
        $("#topMid").text() &&
        $("#topRight").text() &&
        $("#midLeft").text()  &&
        $("#midMid").text()  &&
        $("#midRight").text() &&
        $("#botLeft").text() &&
        $("#botMid").text() &&
        $("#botRight").text() === "X" && $off === false) {

    $($box).fadeTo( "slow" , 0.25, function(off) {

      $("h1").text("Tie");
      $off = true;
  });



  }
});
$(".refresh").click ( function reset(){
  $($box).fadeTo( "slow" , 0.1, function() {
  $($box).text('');
  });
  $("div").fadeTo( "slow" , 1, function() {
  $turn = 2;
  $("h1").text("Tic Tac Toe");
  $off = false;
  });
});
});
