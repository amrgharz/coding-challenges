let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];

for (let i = 0; i < bills.length; i++){
    const clacAvarage = function (){
        if(bill <= 300 && bill >= 50){
            tip = bills[i] * 15 / 100; 
        }else{
            tip = bills[i] * 20 / 100;
        }
        return tip
    }
    let bill = bills[i];
    clacAvarage()
    let total = bills[i] + tip
    let newtips = tips.push(tip)
    let newTotals = totals.push(total)
    console.log(tips)
    console.log(totals)
    
}

const calcAverare = function (arr){
    let sum = 0;
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i]
    }
    let avarage = sum / arr.length
    return avarage
}
console.log(calcAverare([5,2,5,2,1]))
console.log(calcAverare(totals))
console.log(calcAverare(tips))