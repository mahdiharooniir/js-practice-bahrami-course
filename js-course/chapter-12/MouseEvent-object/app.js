const div = document.querySelector('#box')
div.addEventListener("click", handler)


function handler(event) {
    let message = `Event Type: ${event.type}</br>`
    message += `Target: ${event.target.nodeName}</br>`
    message += `Client X: ${event.clientX}, ClientY: ${event.clientY}</br>`
    message += `Offset X: ${event.offsetX}, OffsetY: ${event.offsetY}</br>`
    message += `Page X: ${event.pageX}, Page Y: ${event.pageY}</br>`,
    message += `ScreenX: ${event.screenX}, Screen Y: ${event.screenY}</br>`,
    message += `Alt: ${event.altKey}</br>`,
    message += `Ctrl: ${event.ctrlKey}</br>`,
    message += `Shift: ${event.shiftKey}</br>`,



    div.innerHTML = message;
}



document.addEventListener("click", function(event) {
    console.log(event); 
});