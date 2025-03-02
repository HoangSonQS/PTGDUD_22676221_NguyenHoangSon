function BMI(mass, height) {
    return mass / (height * height);
}


let markMass1 = 78;
let markHeight1 = 1.69;
let markBMI1 = BMI(markMass1, markHeight1);
console.log("Mark1 BMI: " + markBMI1);

let johnMass1 = 92;
let johnHeight1 = 1.95;
let johnBMI1 = BMI(johnMass1, johnHeight1);
console.log("John1 BMI: " + johnBMI1);

let higherBMI1 = markBMI1 > johnBMI1;
console.log("Is Mark's BMI higher than John's BMI ?:" + higherBMI1)

//data 2
let markMass2 = 95;
let markHeight2 = 1.88;
let markBMI2 = BMI(markMass2, markHeight2);
console.log("Mark2 BMI: " + markBMI2);

let johnMass2 = 85;
let johnHeight2 = 1.76;
let johnBMI2 = BMI(johnMass2, johnHeight2);
console.log("John2 BMI: " + johnBMI2);
let higherBMI2 = markBMI2 > johnBMI2;
console.log("Is Mark's BMI higher than John's BMI ?:" + higherBMI2)