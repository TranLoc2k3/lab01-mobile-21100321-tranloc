// Ho va ten: Tran Loc
// MSSV: 21100321
// Lab02- Javascript-fundamentals-part2

// Coding Challenge #1
function calcAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function checkWinner(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolhins} vs. ${avgKoalas})`);
    }
    else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolhins})`);
    }
    else {
        console.log("No team wins...");
    }
}

// checkWinner(calcAverage(44, 23, 71), calcAverage(65, 54, 49));
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// Coding Challenge #2
function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
        return bill * 0.15;
    }
    return bill * 0.2;
}


let bills = [125, 555, 44]
let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
let toltal = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log("Bills: ", bills);
// console.log("Tips: ", tips);
// console.log("Total: ", toltal);

// Coding Challenge #3
let Mark = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
}
let John = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
}

function calcBMI(mass, height) {
    return mass / height ** 2;
}

// if (calcBMI(Mark.mass, Mark.height) > calcBMI(John.mass, John.height)) {
//     console.log(`${Mark.fullname}'s BMI (${calcBMI(Mark.mass, Mark.height)}) is higher than ${John.fullname}'s BMI (${calcBMI(John.mass, John.height)})`);
// }
// else {
//     console.log(`${John.fullname}'s BMI (${calcBMI(John.mass, John.height)}) is higher than ${Mark.fullname}'s BMI (${calcBMI(Mark.mass, Mark.height)})`);
// }


// Coding Challenge #4
let bills2 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips2 = [];
let toltals2 = [];

for (let i = 0; i < bills2.length; i++) {
    tips2.push(calcTip(bills2[i]));
    toltals2.push(bills2[i] + tips2[i]);
}

console.log("Bills: ", bills2);
console.log("Tips: ", tips2);
console.log("Total: ", toltals2);
