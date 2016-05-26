// JavaScript source code
function calculateTotal() {
    var pretzel = 3.99;
    var userInput = document.getElementById("quantity");
    var userSelection = userInput.elements["pretzelNum"].value; //get value of object
    var totalSale = pretzel * userSelection;
    totalSale = roundFloat(totalSale, 2);
    document.getElementById("receipt").innerHTML = totalSale;


}
function roundFloat(num, dec) {
    var d = 1;
    for (var i = 0; i < dec; i++) {
        d += "0";
    }
    return Math.round(num * d) / d;
}