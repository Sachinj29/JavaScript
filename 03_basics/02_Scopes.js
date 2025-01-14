//let  , var  ,  const

// let a =10;
// const b =20;
// var c =30;

// console.log(a);
// console.log(b);
// console.log(c);


var c = 300;     // Global Scpoe 

//{ Scope }  "{}" it show the scope

if(true){
    let a =10;
    const b =20;
    var c =30;        // In case of "var" it print the local scope value .

}

// console.log(a);
// console.log(b);
console.log(c);


var a = 300;     // Global Scope 

if(true){
    let a =10;
    // const b =20;
    // var c =30;        

}

console.log(a);

//Define a two function :

function one(){
    const name = "Sachin";

    function two(){
        const surname = "Jadhav";    //surname doesnt access out of the Scope 
        console.log(name);
    }

    //console.log(surname);

    two();
}

one();

// -----------> Child Function access variable of Parent Functions. <----------------------


// --------------->  <--------------------//

function addone(num){              //function
    return num+1;
}

addone(10);

//-----------------------------------------------------------------------

const addtwo = function(num){       // Function/Expressin bolte he.
    return num+2;
}

addtwo(10);

//-------------------------------------------------------------------

console.log(addone(10));            // Print result 11.

function addone(num){             //Here We are Declare the function
    return num+1;
}

//--------------------------------------------------------------

//console.log(addtwo1(10));       // Not print Result as 12. 
//Cannot access 'addtwo1' before initialization
//
const addtwo1 = function(num){        // Here We declare function but hold in one Variable.
    return num+2;
}

console.log(addtwo1(10));  //this way is valid.

//-----------------------------------------------------


