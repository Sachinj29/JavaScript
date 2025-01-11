// ------------> Objects <-----------------

//Singalton
// 
  //Object.create

  // Object Literals.

  const User = {
    name : "Sachin",
    age : 21,
    location : "Islampur",
    email : "sachin@gmail.ac.in",
    isLoged : false,
    lastlogday : ["Mon","Tues","Wed","Thr","Frid"]
  }

  console.log(User.email);
  console.log(User["email"]);
  console.log(User.lastlogday);