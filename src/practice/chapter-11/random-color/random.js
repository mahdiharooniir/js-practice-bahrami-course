// Generate a random integer between min and max (inclusive)
export function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ✅ Method 1: Generate a random RGB color (e.g. rgb(123, 45, 200))
export function randomColorRgb() {
    return `rgb(${randomNum(0, 255)}, ${randomNum(0, 255)}, ${randomNum(
        0,
        255
    )})`;
}

// ✅ Method 2: Generate a random HEX color (e.g. #A3F9C4)
export function randomColorHex() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
