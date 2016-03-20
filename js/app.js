// wait for the DOM to finish loading
$(document).ready(function() {
  // all code to manipulate the DOM
  // goes inside this function
var $turn = 2;

  $(this).find(".box").click( function player1(event){
    if ($(this).text() === ""){
        if ($turn %2 === 0){
        $(this).text("x");
      } else {
        $(this).text("O");
      }
    $turn = $turn + 1;

    }
    else {
        console.log("there is text");
        $("div").effect( "shake",{times:2}, 100  );
    } 
  });

/*  $(".refresh").on("mouseover", function dude(){
      $(".refresh").animate({

        "font-size": "60px"


      }, 1000);

  }); */


});
