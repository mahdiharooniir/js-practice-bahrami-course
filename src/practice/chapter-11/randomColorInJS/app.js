// way 1
function getRandomColor() {
    let letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const toggleBtn = document.querySelector('#toggleBtn');
toggleBtn.onclick = function() {
    document.body.style.backgroundColor = getRandomColor();
}


// // way 2
// function randNum(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }

// function randColor() {
//     return `rgb(${randNum(0, 255)}, ${randNum(0, 255)}, ${randNum(0, 255)})`
// }

// function changeBodyColor() {
//     document.body.style.backgroundColor = randColor()
// }