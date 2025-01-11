//-------------> Arrays <--------------------//

const Arr = [1,2,3,4,5];
console.log(Arr); 
console.log(Arr[2]);

const heros = ["Sachin", "Samrat","Prathamesh","Ashish"];
console.log(heros[2]);

// -------> Arrays methode  <----------------//

//PUSH ELEMENT
Arr.push(6);
console.log(Arr); 

//REVERSE ARRAY
Arr.reverse();
console.log(Arr); 

//POP ELEMENT
Arr.pop();
console.log(Arr);

//UNSHIFT INSERT ELEMENT AT THE START.
Arr.unshift(7);
console.log(Arr); 

Arr.shift();
console.log(Arr); 

console.log(Arr.includes(8));  // O/P--> true / false

console.log(Arr.indexOf(4));

// SLICE / SPLICE :-->

console.log("A ", Arr);
const Arr1 = Arr.slice(1,3);
console.log(Arr1);

console.log("B ", Arr);
const Arr2 = Arr.splice(1,3);
console.log("C ", Arr);
console.log(Arr2);