function FtoC(fahrenheit) {
    if (fahrenheit < minF) return null;
    return ((fahrenheit - 32) * 5) / 9;
}
function CtoF(celsius) {
    if (celsius < minC) return null;
    return celsius * (9 / 5) + 32;
}
const btn = document.getElementById("submitBtn");
const CF = document.getElementById("C-F");
const FC = document.getElementById("F-C");
const input = document.getElementById("inputField");
const output = document.getElementById("output");

const minC = -273.15;
const minF = -459.67;

let convertedValue, inputValue;

btn.onclick = () => {
    inputValue = Number(input.value);
    if (isNaN(inputValue) || !input.value) {
        alert("Please input valid value");
        return;
    }
    if (!CF.checked && !FC.checked) {
        alert("Please choose a conversion method");
        return;
    }
    if (CF.checked) {
        convertedValue = CtoF(inputValue);
        if (convertedValue === null) alert("Please input valid value");
        else output.textContent = convertedValue.toFixed(2);
    } else {
        convertedValue = FtoC(inputValue);
        if (convertedValue === null) alert("Please input valid value");
        else output.textContent = convertedValue.toFixed(2);
    }
};
