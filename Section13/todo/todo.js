// SONSUZ DONGU PROBLEMİ ÇÖZÜLDÜKTEN SONRA ÇALIŞTIRILACAK!!!!!

window.setTimeout(function() {
  var todos = ["Go Home"];
  var input = prompt("What would you like to do?");
  while(input !== "quit"){
    if (input === "list"){
      console.log(todos);
    }
    else if (input === "new") {
      var newtodo = prompt("Enter new todo");
      todos.push(newtodo);
    }
    input = prompt("What would you like to do?");
  }
  console.log("Ok Quit the App!!!");
}, 500);
