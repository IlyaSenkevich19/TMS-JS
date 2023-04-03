//date
let nowDate = new Date().toLocaleDateString()

//specialId
function specialId(length){
    let uniqueId = "";
    const idSymbols = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm123456789";
    const idymbolsLength = idSymbols.length;
    for(let i = 0; i < length; i++){
        uniqueId += idSymbols.charAt(Math.floor(Math.random() * idymbolsLength))
    }
    return uniqueId
}
const randomId = specialId(10)

//
const todos = [];
//
const todo = {
    id: randomId,
    Date: nowDate ,
    text:'Play video games',
    isChecked: true,
}
console.log(todo)
//
function setName(){
    const todo = {
        id: randomId,
        Date: nowDate ,
        text:'Play video games',
        isChecked: true,
    }
}





  
