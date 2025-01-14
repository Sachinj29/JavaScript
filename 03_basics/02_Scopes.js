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



