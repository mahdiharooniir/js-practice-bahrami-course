const allInput = document.querySelector('#all')
const correctInput = document.querySelector('#correct')
const incorrectInput = document.querySelector('#incorrect')
const button = document.querySelector('button')
const result = document.querySelector('span')

button.addEventListener('click', (event) => {
  if (allInput.value == '' || correctInput.value == '' || incorrectInput.value == '') {
    return alert('لطفا همه فیلدها پر شود')
  }

  let all = Number(allInput.value)
  let correct = Number(correctInput.value)
  let incorrect = Number(incorrectInput.value)

  if (correct + incorrect > all) {
    return alert('مجموع سوالات درست و نادرست نمی تواند بیشتر از تعداد کل سوالات باشد')
  }

  let percent = ((3 * correct) - incorrect) / (3 * all) * 100
  result.innerHTML = `${percent.toFixed(2)}%`
  result.classList.remove('invisible')
})
