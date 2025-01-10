//Two Types od Data

// 1] Primitive -->
//  7 types :--> String , Number , Boolean, Null, Undefined, Symbol, BigInt

const id = Symbol('123')
const ida = Symbol('123')
console.log(id==ida);



// 2] Non-Primitive(reference) :-->
// Array, Object, Functions.

const Name = ["Sachin", "Samrat","Prathamesh","Shreyas"];
console.log(Name);

let Obj ={
    Name : "Sachin",
    Age : 21,
    address : "Islampur",
}
console.log(Obj);

const MyFunction = function(){
    console.log("Sachin Jadhav");
}

console.log(typeof MyFunction);


// Stack (Primitive) ,  Heap(Non-Primitive).


// Stack me value ka Copy Milta he


let MyName = "SachinShankarJadhav"

let YouName = MyName
YouName = "SamratMali"

console.log(MyName);
console.log(YouName);



// Heap me value ka reference milta he:-->

let UserOne = {
    email : "Sachinj@gmail.com",
    upi : "user@SBI"
}

let UserTwo = UserOne;

UserTwo.email = "sampt@gmail.com"

console.log(UserOne.email);
console.log(UserTwo.email);

