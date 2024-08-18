const sides = [
    "dice-side-1",
    "dice-side-2",
    "dice-side-3",
    "dice-side-4",
    "dice-side-5",
    "dice-side-6",
];

const basepath = "../images/dice/";
const extention = ".png";

function rollDice() {
    const number = document.getElementById("input").value;
    const diceResult = document.getElementById("diceResult");
    const diceImages = document.getElementById("diceImages");
    const values = [];
    const images = [];
    for (let i = 0; i < number; i++) {
        const value = Math.floor(Math.random() * 6);
        values.push(value + 1);
        images.push(
            '<img src="' +
                basepath +
                sides[value] +
                extention +
                '" alt="Dice ' +
                (value + 1) +
                '">'
        );
    }
    diceResult.textContent =
        "dice result" + (number > 1 ? "s" : "") + ": " + values.join(", ");
    diceImages.innerHTML = images.join("");
}
