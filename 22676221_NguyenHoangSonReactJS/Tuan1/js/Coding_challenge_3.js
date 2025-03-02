function calculateScore(data) {
    let sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum / data.length;
}

function checkWinner (team1, team2) {
    if (team1 > team2) {
        console.log("Dolphins is win a trophy with avg score is " + team1);
    } else if (team1 < team2) {
        console.log("Koalas is win a trophy with avg score is " + team2);
    } else {
        console.log("It's a draw!"); 
    }
}

//Data
console.log("Data");
const dolphinsScore1 = [96, 108, 89];
const koalasScore1 = [88, 91, 110];
const dolphinsAvg1 = calculateScore(dolphinsScore1);
const koalasAvg1 = calculateScore(koalasScore1);

console.log("Dolphins avg score: " + dolphinsAvg1);
console.log("Koalas avg score: " + koalasAvg1);
checkWinner(dolphinsAvg1, koalasAvg1);

//Data Bonus 1
console.log("Data Bonus 1");
const dolphinsScore2 = [97, 112, 101];
const koalasScore2 = [109, 95, 123];
const dolphinsAvg2 = calculateScore(dolphinsScore2);
const koalasAvg2 = calculateScore(koalasScore2);

console.log("Dolphins avg score: " + dolphinsAvg2);
console.log("Koalas avg score: " + koalasAvg2);
checkWinner(dolphinsAvg2, koalasAvg2);

//Data Bonus 2
console.log("Data Bonus 2");
const dolphinsScore3 = [97, 112, 101];
const koalasScore3 = [109, 95, 106];
const dolphinsAvg3 = calculateScore(dolphinsScore3);
const koalasAvg3 = calculateScore(koalasScore3);

console.log("Dolphins avg score: " + dolphinsAvg3);
console.log("Koalas avg score: " + koalasAvg3);
checkWinner(dolphinsAvg3, koalasAvg3);
