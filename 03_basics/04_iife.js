//Immediately Invoked Function Expression (IIFE).

function abc(){
  console.log("DB CONNECTED");
}

abc();

//----------------------------

// function abc(){
//   console.log("DB CONNECTED");
// }();

//------------------------------------

(function abc(){
  console.log("DB CONNECTED AGAIN");
})();

//----------------------------
//-------------> Arrow Function IIFE <---------------------

( () => {
  console.log("DB CONNECTED AGAIN TWICE");
})();

//-------------------------------------------------------

( (name) => {
  console.log(`DB CONNECTED AGAIN TWICE TO ${name}`);
})('SACHIN');

