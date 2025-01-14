
// Loop  :------------>

// for(let i=0; i<=10; i++){
//   console.log(i);
// }

//----------------------------------->

// for(let i=0; i<5; i++){
//   const element = i;
//   console.log(element);
// }

//-------------------------------------->

for(let i=0; i<7; i++){
  const element = i;
  if(element==5){
    console.log("5 is best number");
  }
  console.log(element);
}

//-------------------------->
/*
for(){
  for(){
  }
}
  */

// for(let i=0; i<=5; i++){
//   console.log(`Outer loop value : ${i}`);
//   for(let j=0; j<=5; j++){
//     console.log(`Inner loop value : ${j}`);
//   }
// }

//-----------------------------------------------------------

// for(let i=0;i<5;i++){
//   for(let j=0;j<5;j++){
//     console.log(`${i} ${j}`);
//   }
// }



//------------>Pattern Printing <-------------

const row = 5;

for (let i = 0; i < row; i++) {
  for (let j = 0; j <= i; j++) {
    process.stdout.write("* ");
  }
  console.log(); // Move to the next line after each row
}

// ======> Table <==========

for(let i=1;i<=5;i++){
  console.log(`Table of ${i}`);
  for(let j=1;j<=10;j++){
    console.log(i + "*" + j  +"="+ i*j );
  }
}

//==========> Array  <===============

let MyArray = ["Sachin", "Samrat", "Prathamesh", "Yash"];

for(let i=0; i<MyArray.length; i++){
  const name = MyArray[i];
  console.log(name);
}
