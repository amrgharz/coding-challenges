let johnHight = 1.5;
let johnMass  = 68;

let markHieght = 1.87;
let markMass  = 85;

let johnBMI = johnMass / (johnHight * johnHight);
let markBMI = markMass / (markHieght ** 2);

let markHigherBMI = markBMI > johnBMI

console.log(johnBMI, markBMI, markHigherBMI)