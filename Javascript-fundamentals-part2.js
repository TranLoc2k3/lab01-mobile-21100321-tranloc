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

console.log("Bills: ", bills);
console.log("Tips: ", tips);
console.log("Total: ", toltal);
