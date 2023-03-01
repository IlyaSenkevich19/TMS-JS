function getsum(get){
    let sum = 0;
    for (let i=0; i<get; i++){
        sum+=1;
    }
    return(sum)
}
console.log(getsum(100))


let cred = (545565)
let proc = .17;
let years = 5;
console.log(cred*proc*years)
//Через функцию не получалось




function trimString(str, from, to) {
  return str.slice(from, to + 1);
}
console.log(trimString("Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto expedita ipsum voluptates quos nesciunt quia non fuga repellendus animi, perferendis error sunt, repudiandae neque sapiente officia quaerat vel, voluptatum ipsam?", 0, 4));  




// let chislo= (2021)
// let sum =0; 
// for (let i=0; i<chislo.length; i++){
// sum+=Number(chislo[i])
// }
// console.log(sum)
//Не погимаю




function gettSum(a, b){
    let sumAB = 0;
      if (a === b){
          return a;
      }
      else if (a > b){
        for (let i = b; i >= a; i--){
          sumAB += i;
      }
      }
      else {
          for (let i = a; i <= b; i++){
              sumAB += i;
          }
          return sumAB;
      }
  }
  console.log(gettSum(-86, 422));





  const foo = function(){
    return 'Name foo';
}
const boo = function(){
    return 'Name boo';
}

function lol (blabla, flaf, blaf){
    if (blabla){
        return flaf();
    }
    else {
        return blaf();
    }
}
console.log(lol(true, foo, boo));


function triangle (a, b, c) {
  return (a + b < c || a + c < b || b + c < a || a < 0 || b < 0 || c < 0);
}
console.log(triangle(-9, 12, 6));
