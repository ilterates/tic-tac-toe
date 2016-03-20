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

  $(this).find($box).click( function tie(event){
    if ($("#topLeft").text() === "X" || $("#topLeft").text() === "O" &&
        $("#topMid").text() === "X" || $("#topMid").text() ===  "O" &&
        $("#topRight").text() === "X" || $("#topRight").text() === "O" &&
        $("#midLeft").text() === "X" || $("#midLeft").text() === "O" &&
        $("#midMid").text() === "X" || $("#midMid").text() === "O" &&
        $("#midRight").text() === "X" || $("#midRight").text() === "O" &&
        $("#botLeft").text() === "X" || $("#botLeft").text() === "O" &&
        $("#botMid").text() === "X" || $("#botMid").text() === "O" &&
        $("#botRight").text() === "X" || $("#botRight").text() === "O" ) {
    console.log("TIE");
  } else {
    console.log("not tie");
  }
});
/*  $(".refresh").on("mouseover", function dude(){
      $(".refresh").animate({

        "font-size": "60px"


      }, 1000);

  }); */


});
