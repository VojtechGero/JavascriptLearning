const display = document.getElementById("display");
function appendToDisplay(input) {
    if (display.value === "Error") display.value = "";
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        newValue = eval(display.value);
        if (newValue == Infinity) throw new Error();
        limit = Math.pow(10, 10);
        display.value = Math.round((newValue + Number.EPSILON) * limit) / limit;
    } catch (error) {
        display.value = "Error";
    }
}
