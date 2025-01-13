//-----------> FUNCTION <-----------------//

function MyFun(){
    console.log("sachin");
    console.log("Jadhav");
}

MyFun();

//Addition ----->

function Addition(n1,n2){
    console.log(n1+n2);
}

console.log("Addition of Two number :");
Addition(8,5);

//Multiplication ---------->

function Multiplication(a,b){
    // let c = a*b
    // return c

    return a*b;
}

const c = Multiplication(6,4);
console.log("Result is :" ,c);

//------------> 

function UserLogin(username){
    return `${username} just logged in.`
}

console.log(UserLogin("Sachin"));