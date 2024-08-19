// Ho va ten: Tran Loc
// MSSV: 21100321
// Lab01- Javascript-fundamentals-part1


// Coding Challenge #1
let MarkMass = 78;
let MarkHeight = 1.69;

let JohnMass = 92;
let JohnHeight = 1.95;

let MarkBMI = MarkMass / MarkHeight ** 2;
let JohnBMI = JohnMass / JohnHeight ** 2;

let MarkHigherBMI = MarkBMI > JohnBMI;

// console.log("Mark is higher than John: " + MarkHigherBMI);


// Coding Challenge #2
// if (MarkBMI > JohnBMI) {
//     console.log("Mark's BMI is higher than John's!");
// }
// else {
//     console.log("John's BMI is higher than Mark's!");
// }

// if (MarkBMI > JohnBMI) {
//     console.log(`Mark's BMI (${MarkBMI}) is higher than John's (${JohnBMI})!`);
// }
// else {
//     console.log(`John's BMI (${JohnBMI}) is higher than Mark's (${MarkBMI})!`);
// }

// Coding Challenge #3
let scoreDolphins = [96, 108, 89];
let scoreKoalas = [88, 91, 110];

let averageDolphins = (scoreDolphins[0] + scoreDolphins[1] + scoreDolphins[2]) / 3;
let averageKoalas = (scoreKoalas[0] + scoreKoalas[1] + scoreKoalas[2]) / 3;

// if (averageDolphins > averageKoalas && averageDolphins >= 100) {
//     console.log("Dolphins win the trophy!");
// }
// else {
//     console.log("Koalas win the trophy!");
// }


// Coding Challenge #4
let bill = 430;
let tip;

if (bill >= 50 && bill <= 300) {
    tip = bill * 0.15;
}
else {
    tip = bill * 0.2;
}

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
