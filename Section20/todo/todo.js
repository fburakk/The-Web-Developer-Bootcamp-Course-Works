$("ul").on("click", "li", function() {
  $(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

$("input").on("keypress", function(event) {
  if(event.which === 13){
    $("ul").append("<li> <span> X </span>" + $(this).val() + "</li>");
  }
});

// $("li").click(function() {
//   console.log($(this).css("color"));
//   if($(this).css("color") === "rgb(128, 128, 128)"){
//       $(this).css({
//         color: "black",
//         textDecoration: "none"
//       });
//   }
//   else {
//     $(this).css({
//       color: "gray",
//       textDecoration : "line-through"
//     });
//   }
//
// });
