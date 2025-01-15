//
// =============> Forof Loop <==================

const arr = [1,2,3,4,5];

for (const i of arr) {
  console.log(i);
}

//--------------------------------------------------------

const str = "Sachin Jadhav";

for (const j of str) {
  console.log(`Each Char is ${j}`);
}

//-----------------------------------------------------

//Map :--> Store Key-Value pair.

const map = new Map()
map.set("S" , "Sachin")
map.set("P" , "Prathamesh")
map.set("Y" , "Yash")

console.log(map);

//----------------------------

for (const [key , value] of map) {
  console.log(key, "=", value);
}