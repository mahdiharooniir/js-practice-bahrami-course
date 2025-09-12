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
