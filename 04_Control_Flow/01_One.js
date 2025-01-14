// if :----------->

/*if(condition){
   console.log();
  }

*/  

// Comparision Operators : --------->
// "<", ">", "<=", ">=", "==", "!=", "===" 

if(2==2){
  console.log("True");
}

// ------------------------------------------

if(4>7){
  console.log("True");
}else{
  console.log("False");
}

//-----------------------------------------------

const score = 200
if(score > 100){
  var power = "Fly"
  console.log(`User Power: ${power}`);
}

console.log(`User Power: ${power}`);

//---------------------------------------------------------
// Implicit Scope : ---------------->

const bal = 200

if(bal>100) console.log("Save");

//---------------------------------------------------------

let age = 18;

if(age>18){
  console.log("Applicable for Vooting");
}
else if(age>=18){
  console.log("Wait for Some Time");
}
else{
  console.log("Your are now Child");
}

//-------------------------------------------------

const login = true
const debitcard = true
const code = false

if(login && debitcard && code){
  console.log("Allow");
}
else if(login || debitcard && code){
  console.log("Partially Allow")
}
else{
  console.log("Not Allowed");
}