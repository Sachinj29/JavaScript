
const user  = {
  username : "Sachin",
  age : 21,

  welcomemsg: function(){
    // console.log(`${this.username}, Welcome to Website.`);
    // console.log(`Im a ${this.age} year old.`);
    console.log(this);

    // "this  print the current Contest."

  }
}

user.welcomemsg();
user.username = "Samrat";
user.age = 22;
user.welcomemsg();

// function abc(){
//   console.log(this);

// }

// abc();

//-------------------------------------------------\

function abc(){
  let username = "Sachin"
  console.log(this.username);   
}
abc();                              //it Print Op = Undefined.

//--------------------------------------------------
//----------------> Arrow Function <-------------------

const xyz = () => {
  let username = "Sachin"
  console.log(this);   
}
xyz();

//-----------> Arrow Function Syntax <-----------
// "  () => {}  "   or    "  () => ()  " 
//when use "{}" then there is need to write "return" keyword
//when use"()" then there is no need to write "return".

const addo = (n1, n2) => {
  return n1 + n2
}

console.log(addo(4,5));

//---------------------------------

const addt = (n1, n2) => (n1 + n2)
  
console.log(addt(5,5));
