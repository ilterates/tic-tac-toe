// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
var $turn = 2;
var $box = $(".box");
var $topLeft = $("#topLeft");
var $topMid = $("topMid");
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
