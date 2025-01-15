//==========>  forEach  <============

const coding = ["C","CPP", "JAVA", "PYTHON", "JS"];
coding.forEach( function (val){
  console.log(val);
})

console.log(" ")

//-----------------------------------------

coding.forEach( (item) => {
  console.log(item)
})


//--------------------------------------------

console.log(" ");

function Printme(item){
  console.log(item);
}

coding.forEach(Printme);

//---------------------------------------

