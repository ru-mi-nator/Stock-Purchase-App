var initialPrice = document.querySelector("#initial-price");
var stockQuantity = document.querySelector("#stock-quantity");
var currentPrice = document.querySelector("#current-price");
var tellMeBtn = document.querySelector("#tell-me-btn");
var outputBox = document.querySelector("#output-box");

tellMeBtn.addEventListener('click', clickHandler);

function clickHandler() {
    var int = Number(initialPrice.value);
    var qty = Number(stockQuantity.value);
    var curr = Number(currentPrice.value);

    if(int>0 && qty>0 && curr>0) {
    calculateProfitAndLoss(int, qty, curr);
    } else if(int<0 || qty<0 || curr<0) {
    showOutput("Values can't be negative!!")
    } else {
    showOutput("Please enter all the values!!")
}
}

function calculateProfitAndLoss(initial, quantity, current) {
    if (current > initial) {
        var profit = (current - initial) * quantity;
        var profitPercetage = ((profit / initial) * 100).toFixed(2);
        showOutput(`Hey the Profit is ${profit} and the Profit Percentage is ${profitPercetage}`)
    } else if (initial > current) {
        var loss = (initial - current) * quantity;
        var lossPercentage  = ((loss / initial) * 100).toFixed(2);
        showOutput(`Hey the Loss is ${loss} and Loss Percentage is ${lossPercentage}`);
        console.log(`loss is ${loss}`);          
    } else {
        showOutput("You are at a breakeven point!")
    }
}

function showOutput(message) {
    outputBox.innerHTML = message;
}