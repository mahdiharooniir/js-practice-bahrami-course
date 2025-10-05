import { randomColorHex, randomColorRgb } from "./random.js";

const button = document.querySelector("button");

// Change body background color on button click
button.addEventListener("click", () => {
    // Choose one of the methods below
    document.body.style.backgroundColor = randomColorRgb();
    // document.body.style.backgroundColor = randomColorHex();
});