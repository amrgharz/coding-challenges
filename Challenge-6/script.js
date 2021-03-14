'use strict'
const tipCalc = function(bill){
    let tip;
    if (bill <= 300 && bill >= 50 ){
        tip = bill * 0.15
    }else{
        tip = bill * 0.20
    }
    return tip;
}
const tipLog = tipCalc(600)
console.log(tipLog)

const bills = [125, 555, 44]
const tips  = [tipCalc(125), tipCalc(555), tipCalc(44)]
console.log(tips)
const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2] ]
console.log(total)

///////// Tests for objects, not related to the challenga
const jonas = {
    firstName : 'jonas',
    secondName : "schmedman",
    job : "teacher",
    friends : ["micheal", "amr", "fadi"],
    hasDriversLicense : false,
    job: "teacher",
    birthYear: 1991,

    calcAge: function(){
        this.age = 2037 - this.birthYear;
        return this.age
    },

    getSummary: function(){
        return `${jonas.firstName} is a ${this.calcAge()}-year old ${jonas.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
    }
}

console.log(jonas.getSummary())

console.log(jonas.calcAge())

const details = `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is ${jonas.friends[0]}`
console.log(details)