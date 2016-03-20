// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
var $turn = 2;
var $box = $(".box");
var $topLeft = $("#topLeft");
var $topMid = $("topMid");
var $topRight = $("topRight");
var $midLeft = $("midLeft");
var $midMid = $("midMid");
var $midRight = $("midRight");
var $botLeft = $("botLeft");
var $botMid = $("botMid");
var $botRight = $("botRight");
  $(this).find($box).click( function game(event){
    if ($(this).text() === ""){
        if ($turn %2 === 0){
        $(this).text("X");
      } else {
        $(this).text("O");
      }
    $turn = $turn + 1;
    }
    else {
        console.log("there is text");
        $("div").effect( "shake",{times:2}, 270  );
    }
    // SETTING WINS FOR X
    if ($("#topLeft") && $("#topMid") && $("#topRight").is(':contains("X")') ||
        $("#midLeft") && $("#midMid") && $("#midRight").is(':contains("X")') ||
        $("#botLeft") && $("#botMid") && $("#botRight").is(':contains("X")') ||
        $("#topLeft") && $("#midMid") && $("#botRight").is(':contains("X")') ||
        $("#topRight") && $("#midMid") && $("#botLeft").is(':contains("X")')) {
          console.log("X WON");
       }
    // SETTING WINS FOR O
    if ($("#topLeft") && $("#topMid") && $("#topRight").is(':contains("O")') ||
        $("#midLeft") && $("#midMid") && $("#midRight").is(':contains("O")') ||
        $("#botLeft") && $("#botMid") && $("#botRight").is(':contains("O")') ||
        $("#topLeft") && $("#midMid") && $("#botRight").is(':contains("O")') ||
        $("#topRight") && $("#midMid") && $("#botLeft").is(':contains("O")')) {
          console.log("O WON");
       }
  });

  $(this).find(".box").click( function gameOver(){
    if ($("#topLeft").text() &&
        $("#topMid").text() &&
        $("#topRight").text() &&
        $("#midLeft").text()  &&
        $("#midMid").text()  &&
        $("#midRight").text() &&
        $("#botLeft").text() &&
        $("#botMid").text() &&
        $("#botRight").text() === "X") {
    $($box).fadeTo( "slow" , 0.25, function() {
      $(".gameOver").text("Game is over");

  });
  $("h1").text("Game is over");


  } else {
    console.log("not");
  }
});

/*  $(".refresh").on("mouseover", function dude(){
      $(".refresh").animate({

        "font-size": "60px"


      }, 1000);

  }); */


});
