const main = document.querySelector('#root')

const section = document.createElement('div');
section.style.cssText =`
width: 100%;
max-width: 1000px;
height: 700px;
background-color: darkgrey;
border-radius: 5%;
border: 6px solid black;
`
main.append(section)

const header = document.createElement('div')
header.style.cssText=`
    width: 90%;
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 15px;
    text-align: center;
    `
    section.append(header)

const leftHeader = document.createElement('button')
leftHeader.style.cssText=`
    width: 25%;
    height: 80%;
    background-color: aqua;
    border: 6px solid black;
    border-radius: 5%;
    cursor: pointer;
`
header.append(leftHeader)
leftHeader.innerHTML='Delete ALL'

const middleHeader = document.createElement('input')
middleHeader.style.cssText=`
    width: 35%;
    height: 69%;
    background-color: aliceblue;
    border: 6px solid black;
    border-radius: 5%;
    text-align: center;
`
header.append(middleHeader)
middleHeader.setAttribute("value", "Enter todo...");

const rightHeader = leftHeader.cloneNode()
// leftHeader.style.cssText=`
// width: 25%;
// height: 80%;
// background-color: aqua;
// border: 6px solid black;
// border-radius: 5%; 
// `
rightHeader.innerHTML='Add'
header.append(rightHeader)



const body = document.createElement('div')
body.style.cssText=`
    width: 90%;
    height: 30%;
    border: 6px solid black;
    border-radius: 20px;
    background-color: darkgrey;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 50px auto;
    position: relative;
    `
    section.append(body)

const cross = document.createElement('button')
cross.style.cssText=`
    display: flex;
    width: 8%;
    height: 25%;
    background-color: aqua;
    border: 4px solid black;
    border-radius: 10px;
    position: absolute;
    right: 3%;
    top: 5%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    `
    cross.innerHTML='Cross'
    body.append(cross)

    const apply = document.createElement('button')
    apply.style.cssText=`
    display: flex;
    width: 8%;
    height: 25%;
    background-color: aqua;
    border: 4px solid black;
    border-radius: 10px;
    position: absolute;
    left: 3%;
    top: 39%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    `
    apply.innerHTML='Apply'
    body.append(apply)

    const TodoText = document.createElement('input')
    TodoText.style.cssText =`
    height: 25%;
    width: 60%;
    background-color: beige;
    position: absolute;
    left: 18%;
    top: 38%;
    text-align: center;
    border-radius: 20px;
    `
    TodoText.setAttribute("value", "Enter todo...");
    body.append(TodoText)

    const date = document.createElement('input')
    date.style.cssText=`
    height: 25%;
    width: 16%;
    border-radius: 20px;
    background-color: beige;
    position: absolute;
    right: 3%;
    bottom: 3%;
    text-align: center;
    `
    date.setAttribute('value', 'Date')
    body.append(date)

    const footer=body.cloneNode(true)
    section.append(footer)



    /////////////////EXTREME\\\\\\\\\\\\\\\\\\



    const extremeLevel = document.querySelector('#extreme')

    const box = document.createElement('div')
    box.style.cssText =`
    margin-top: 300px;
    width: 100%;
    max-width: 1100px;
    height: 800px;
    background-color: lightgray;
    border-radius: 5%;
    border: 6px solid black;
    `
    extremeLevel.append(box)

    const extreme__header = document.createElement('div')
    extreme__header.style.cssText =`
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    `
    box.append(extreme__header)


    const del__All = document.createElement('button')
    del__All.style.cssText=`
    width: 20%;
    height: 80%;
    background-color: aqua;
    border: 6px solid black;
    border-radius: 9%;
    cursor: pointer;
    `
    extreme__header.append(del__All)
    del__All.innerHTML ='Delete all'

    const del__Last = del__All.cloneNode(true)
    extreme__header.append(del__Last)
    del__Last.innerHTML = 'Delete last'

    const search = document.createElement('input')
    search.style.cssText=`
    display: flex;
    width: 36%;
    height: 69%;
    background-color: antiquewhite;
    border: 6px solid black;
    border-radius: 8%;
    color: grey;
    align-content: center;
    justify-items: center;
    text-align: center;
    `
    extreme__header.append(search)
    search.setAttribute("value", "Enter todo...");

    const add = document.createElement('button')
    add.style.cssText=`
    width: 18%;
    height: 80%;
    background-color: aqua;
    border: 6px solid black;
    border-radius: 8%;
    justify-items: center;
    `
    extreme__header.append(add)
    add.innerHTML ='Add'


    const secondLine = document.createElement('div')
    secondLine.style.cssText=`
    width: 90%;
    height: 20%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    `
    box.append(secondLine)


    const secondLine__Text1 = document.createElement('div')
    secondLine__Text1.style.cssText=`
    display: flex;
    width: 10%;
    height: 80%;
    color: dimgray;
    font-size: 20px;
    flex-wrap: wrap;
    align-content: space-around;
    justify-items: center;
    text-align: center;
    `
    secondLine.append(secondLine__Text1)
    secondLine__Text1.innerHTML = 'All:2'


    const complete = secondLine__Text1.cloneNode(true)
    complete.style.width = '15%';
    secondLine.append(complete)
    complete.innerHTML = 'Completed: 1'


    const butt1 = document.createElement('button')
    butt1.style.cssText=`
    width: 21%;
    height: 80%;
    background-color: aqua;
    color: dimgray;
    border: 6px solid black;
    border-radius: 8%;
    justify-items: center;
    cursor: pointer;
    `
    secondLine.append(butt1)
    butt1.innerHTML = 'Show All'

    const butt2 = butt1.cloneNode(true)
    secondLine.append(butt2)
    butt2.innerHTML = ' Show completed'

    const research = document.createElement('input')
    research.style.cssText=`
    width: 21%;
    height: 67%;
    background-color: aqua;
    color: dimgray;
    border: 6px solid black;
    border-radius: 8%;
    justify-items: center;
    text-align: center;
    `
research.setAttribute('value', 'Search...')
secondLine.append(research)




const plan1 = body.cloneNode(true)
plan1.style.height = '20%';
plan1.style.width = '60%';
box.append(plan1)


const plan2 = plan1.cloneNode(true)
plan2.style.backgroundColor = 'lightgray'
box.append(plan2)
