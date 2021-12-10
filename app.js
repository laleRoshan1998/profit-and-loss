var initialPrice = document.querySelector("#initial-price");
var stocksQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var outputBox = document.querySelector("#output-btn");


submitBtn.addEventListener("click", submitHandler);

function submitHandler() {
    var ip = initialPrice.value;
    var qty = stocksQuantity.value;
    var curr = currentPrice.value;

    calculateProfitLoss(ip, qty, curr);
}
function calculateProfitLoss(initial,quantity,current) {
    if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage = (loss / initial) *100;

        showOutput("Hey the loss is "+String(loss)+ " and the percentage is "+String(lossPercentage)+"%");

    } else if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercentage = (profit/initial) * 100;

        showOutput("Hey the profit is " +String(profit)+ " and the percentage is " + String(profitPercentage)+"%")

    } else {
        showOutput("Kuch nahi mila bhai");  

    }
}


function showOutput(message) {
    outputBox.innerHTML = message;
}