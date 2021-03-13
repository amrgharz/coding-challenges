'use strict'
const calcAvarage = (firstScore, secondScore, thirdScore) => {
    return (firstScore + secondScore + thirdScore)/3
}

let dolphinAvarage = calcAvarage(85, 54, 41)
console.log(dolphinAvarage)
let koalaAvarage   = calcAvarage(23, 34, 27)
console.log(koalaAvarage)

const checkWinner = function (dolphinAvarage, koalaAvarage){
    dolphinAvarage = calcAvarage(1, 54, 41)
    koalaAvarage  = calcAvarage(95, 34, 95)
    if(dolphinAvarage >= (koalaAvarage * 2)){
    return `Dolphin wins (${dolphinAvarage} vs . ${koalaAvarage})`
    }
    else if(koalaAvarage >= (dolphinAvarage*2)){
        return `Koala wins (${koalaAvarage} vs. ${dolphinAvarage})`
    }else{
        return `No one wins the match, the rule did not fulfilled and the porphecy turned to be bullshit`
    }
}

const winner = checkWinner(dolphinAvarage, koalaAvarage )
console.log(winner)