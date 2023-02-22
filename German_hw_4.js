//            Task 1              //


function getSum(n){
    let sum = 0;
    for ( let i = 0; i <= n; i++){
        sum += i;
    }
    console.log(sum);
}
getSum(25);

//            Task 2             //

function  credid(n){
    let vklad = n,
        pereplata;
    for (let i = 0; i<=5 ; i++){
        n = n*1.17;
    }
    pereplata = n - vklad; 
    console.log(pereplata);
}

credid(1000);

//            Task 3             //

function trimString(str, from, to){
    let res = str.slice(from, to);
    console.log(res);
}

trimString('Герман', 2, 5);

//            Task 4             //

function getSumNumbers(ouerNumber){
    let numberString = String(ouerNumber),
        sum = 0;
    for (let i=0; i<=numberString.length-1;  i++){
    let numberNum = Number(numberString[i]);
        sum += numberNum;
    }
    console.log(sum);
}

getSumNumbers(2021);

//            Task 5             //

function getSumNew(a, b){
    let i,
        sum = 0;
    if (a < b){
        for (i = a; i<=b ; i++){
            sum += i;
        }
        console.log(sum);
    } else if(b < a ){
        for (i = b; i<=a ; i++){
            sum += i;
        }
        console.log(sum);
    } else {
        console.log(a);
    }
}

getSumNew(4, -2);

//            Task 6             //


function foo(){
    console.log('foo')
};

function boo(){
    console.log('boo')
};

function fooboo(bool){
    if(bool){
        foo();
    } else {
        boo();
    }
}

fooboo(false);


//            Task 7             //



