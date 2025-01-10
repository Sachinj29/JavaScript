let str = " Sachin";
console.log(str);

let str1  = " Jadhav";
console.log(str1);

//let str3 = str + str1 ;
console.log(str + " Shankar" +str1);

const Sname = new String("Sachin Jadhav");
console.log(Sname[2]);
console.log(Sname.__proto__);

console.log(Sname.length);
console.log(Sname.toUpperCase());
console.log(Sname.charAt(5));
console.log(Sname.indexOf('n'));

const NewStr = Sname.substring(0,10);
console.log(NewStr);

const NewStr1 = Sname.slice(3,9);
console.log(NewStr1);

const NewStr2 = "   Sachin Jadhav   ";
console.log(NewStr2);
console.log(NewStr2.trim());



