
// const tr = new Object()

const tr = {}

tr.id = "cse4107"
tr.name = "sachin"
tr.islogin = false

console.log(tr);

const Rl = {
    FullName:{
        UserFullName:{
            FirstName: "Sachin",
            Lastname: "Jadhav"
        }
    }
}

console.log(Rl.FullName);
console.log(Rl.FullName.UserFullName);
console.log(Rl.FullName.UserFullName.Lastname);

const o1 = {1:"a", 2:"b"}
const o2 = {3:"c", 4:"d"}
const o3 = {o1,o2}
console.log(o3)

const o4 = Object.assign(o1,o2);
console.log(o4);

//---------> <----------//
const sj = [
    {
        id : "cse4107",
        mail : "sachin@gmail.com"
    },
    {
        id : "cse4108",
        mail : "samrat@gmail.com"
    },
    {
        id : "cse4109",
        mail : "yash@gmail.com"
    }
]

console.log(sj);


//------------> <----------------//
const course = {
    name : "JavaScript",
    price : 1000,
    courset : "Sachin"
}

const {courset} = course;
console.log(courset);    




