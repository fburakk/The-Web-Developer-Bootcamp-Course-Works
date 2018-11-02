var button = document.querySelector("#btn1");

button.addEventListener('click', function(){

  // 1st way
  // if(document.body.style.background === ""){
  //   document.body.style.background = "purple";
  // } else{
  //   document.body.style.background = "";
  // }

  // 2nd way
  document.body.classList.toggle("purple");

});
