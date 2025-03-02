function calculatorTip(bill) {
    var tip;
    if (bill >= 50 && bill <= 300) {
        tip = bill * 0.15;
    } else {
        tip = bill * 0.20;
    }
    return tip;
}

var bills = [275, 40, 430];
for (var i = 0; i < bills.length; i++) {
    var tip = calculatorTip(bills[i]);
    console.log("The bill was " + bills[i] + ", the tip was " + tip + ", and the total value was " + (bills[i] + tip));
}