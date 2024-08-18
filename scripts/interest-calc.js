function inputToPositiveNumber(value) {
    const x = Number(value);
    if (x < 0 || isNaN(x)) return 0;
    return x;
}

function calculate() {
    const total = document.getElementById("total-amounts");
    const principal = document.getElementById("principal");
    const rate = document.getElementById("rate");
    const years = document.getElementById("years");
    let principalValue = inputToPositiveNumber(principal.value);
    let rateValue = inputToPositiveNumber(rate.value / 100);
    let yearsValue = inputToPositiveNumber(years.value);
    const result = principalValue * Math.pow(1 + rateValue / 1, 1 * yearsValue);
    total.textContent = result.toLocaleString(undefined, {
        style: "currency",
        currency: "CZk",
    });
}
