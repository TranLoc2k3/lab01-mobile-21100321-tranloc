// Ho va ten: Tran Loc
// MSSV: 21100321
// Lab01- Developer-skills-editor-setup

// Coding Challenge #1
function printForecast(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(`... ${arr[i]}°C in ${i + 1} days`);
    }
}

let data1 = [17, 21, 23];
let data2 = [12, 5, -5, 0, 4];

console.log("---- Data 1 ----");
printForecast(data1);
console.log("---- Data 2 ----");
printForecast(data2);