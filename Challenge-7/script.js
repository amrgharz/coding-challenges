const mark = {
    name : 'Mark Miller',
    mass: 78,
    height:1.69,
    calcBMI: function (){
        return this.mass / (this.height * this.height)
    }
}

const john = {
    name : "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function (){
        return this.mass / (this.height * this.height)
    }
}
if(mark.calcBMI() > john.calcBMI()){
    console.log(`${mark.name}'s BMI (${mark.calcBMI()}) is higher than ${john.name}'s BMI ${john.calcBMI()}`)
}else{
    console.log(`${john.name}'s BMI (${john.calcBMI()}) is higher than ${mark.name}'s BMI ${mark.calcBMI()}`)
}
