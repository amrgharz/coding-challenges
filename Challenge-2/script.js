let johnHight = 1.5;
let johnMass  = 68;

let markHieght = 1.87;
let markMass  = 85;

let johnBMI = johnMass / (johnHight * johnHight);
let markBMI = markMass / (markHieght ** 2);

let markHigherBMI = markBMI > johnBMI

console.log(johnBMI, markBMI, markHigherBMI)

//Print out to the console whos BMI is higher
if(markHigherBMI){
    console.log(`Mark's BMI is ${markBMI} and it is higher than ${johnBMI} Jhon's BMI`)
}else{
    console.log(`Jhon's BMI is ${johnBMI} and it is higher than ${markBMI} Mark's BMI`)
}