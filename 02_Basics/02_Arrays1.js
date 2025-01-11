//--------------->  Arrays  <-----------------------//

const friends = ["Samrat", "Prathamesh", "Shreyas","Ashish"];
const bikes = ["Splender","Shine","Bullet","yama"];

// friends.push(bikes);  // TAKE ARRAY AS A ELEMENT HERE.
// console.log(friends);
// console.log(friends[2]);
// console.log(friends[4]);

const All = friends.concat(bikes);  // TAKE ARRAY AS A ELEMENT HERE.
console.log(All);

console.log(Array.isArray("sachin"));
console.log(Array.from("sachin"));


let n1 = 100;
let n2 = 200;
let n3 = 300;
let n4 = 400;
console.log(Array.of(n1,n2,n3,n4));

