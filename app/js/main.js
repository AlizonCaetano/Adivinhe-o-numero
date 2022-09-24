const tryScreen = document.querySelector('.try-screen')
const tryAgainScreen = document.querySelector('.try-again-screen')
let attemptsContainer = document.querySelector('.input-message')

const btnTry = document.querySelector('#btnTry')

const btnPlayAgain = document.querySelector('#btnPlayAgain')

let xAttempts = 1

btnTry.addEventListener('click', handleTryClick)
btnPlayAgain.addEventListener('click', handleTryAgainClick)

function toggleScreen() {
  tryAgainScreen.classList.toggle('hide')
  tryScreen.classList.toggle('hide')
}

function handleTryClick(event) {
  event.preventDefault()

  let randomNumber = Math.round(Math.random() * 10)

  let inputVal = Number(tryScreen.querySelector('#inputTryBtn').value)

  let br = `<br/>`

  if (inputVal != randomNumber) {
    if (inputVal >= 0 && inputVal <= 10 && inputVal != '') {
      attemptsContainer.innerHTML =
        xAttempts < 2
          ? `Você fez ${xAttempts++} tentativa ${br} Pensei no ${randomNumber}`
          : `Você fez ${xAttempts++} tentativas ${br} Pensei no ${randomNumber}`
    } else {
      alert('Somente numeros entre 0 a 10')
    }
  } else {
    toggleScreen()
    tryAgainScreen.querySelector('h2').innerHTML =
      xAttempts > 1 ? `${xAttempts} tentativas` : `${xAttempts} tentativa`
  }
}

function handleTryAgainClick(event) {
  event.preventDefault()
  toggleScreen()

  attemptsContainer.innerHTML = ``
  this.xAttempts.innerHTML = 1
  tryAgainScreen.querySelector('h2').innerHTML = xAttempts
}
