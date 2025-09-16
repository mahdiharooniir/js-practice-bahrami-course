// way 1
const number = document.querySelector('#number')
const increase = document.querySelector('#increase')
const reset = document.querySelector('#reset')
const decrease = document.querySelector('#decrease')

let num = 0;

// تابع فقط برای مدیریت رنگ
function colorize(value) {
    // پاک کردن همه کلاس‌های رنگ
    number.classList.remove('text-green-500', 'text-red-500', 'text-gray-200')

    if(value > 0) {
        number.classList.add('text-green-500')
    } else if (value < 0) {
        number.classList.add('text-red-500')
    } else {
        number.classList.add('text-gray-200')
    }
}

increase.addEventListener('click', () => {
    num++
    number.textContent = num > 0 ? `+${num}` : num
    colorize(num)
})

decrease.addEventListener('click', () => {
    num--
    number.textContent = num > 0 ? `+${num}` : num
    colorize(num)
})

reset.addEventListener('click', () => {
    num = 0
    number.textContent = num
    colorize(num)
})


// // way 2
// // DOM References
// const number = document.querySelector('#number')

// // State
// let num = 0

// // Pure Functions
// function updateNumberColor(value) {
//     number.classList.remove('text-green-500','text-red-500','text-gray-200')
//     if(value > 0) number.classList.add('text-green-500')
//         else if(value < 0) number.classList.add('text-red-500')
//     else number.classList.add('text-gray-200')
// }

// function updateNumberDisplay(value) {
//     number.textContent = value > 0 ? `+${value}` : value
// }

// // Orchestrator Functions
// function updateNumber(value) {
//     updateNumberColor(value)
//     updateNumberDisplay(value)
// }

// // Event Listeners
// document.querySelector('#increase').addEventListener('click', () => updateNumber(++num))
// document.querySelector('#decrease').addEventListener('click', () => updateNumber(--num))
// document.querySelector('#reset').addEventListener('click', () => updateNumber(num = 0))