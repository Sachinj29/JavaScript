  // map -------------->

  const myNumber =[1,2,3,4,5]
  //const newnums = myNumber.map( (num) => { return num + 10})
  

  const newnums = myNumber.map( (num) => num*10).map( (num) => num+1).filter( (num) => num>= 30)

  console.log(newnums);
