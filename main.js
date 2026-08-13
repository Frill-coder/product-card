// покрасить все карточки

const productCards = document.querySelectorAll('.products__item')
console.log('все карточки ',productCards)
const changeColorCardsButton = document.querySelector('#change-color-all-cards-button')
changeColorCardsButton.addEventListener('click', () => {
  productCards.forEach((card)=>
    card.style.backgroundColor = 'lightblue')
}  )

// покрасить первую карточку

const productCard = document.querySelector('.products__item')
const changeFirstColorCard =  document.querySelector('#change-color-first-card-button')
changeFirstColorCard.addEventListener('click', () => {
  productCard.style.backgroundColor = 'lightgreen'
})

// открыть Google

const openGoogleButton = document.querySelector('#open-google-button')
// openGoogleButton.addEventListener('click', openGoogle)
// function openGoogle() {
//     const answer = confirm('Вы уверены, что хотите открыть Google?')
//     if (answer) {
//         window.open('https://www.google.com', '_blank')
//     } else {
//         return;
//     }
// }
openGoogleButton.addEventListener('click', openGoogle)
function openGoogle() {
  const answer = confirm('Перейти в Google')
  if (answer) {
    window.open('https:www.google.com') 
  } 
}
// openGoogleButton.addEventListener('click', () => {
//     openGoogleButton ? window.open('https://www.google.com', '_blank') : null
// })

// консоль лог

const outputConsoleLogButton = document.querySelector('#output-console-log-button');
outputConsoleLogButton.addEventListener('click', () => outputConsolLOg('Hello, this is a message from the console log!'))

function outputConsolLOg(message) {
    alert('9')
    console.log(message)   
}

//ЗАДАНИЕ; ПУНКТ 6: ВЫВОД ЭЛЕМЕНТА В КОНСОЛЬ
const choiseYourChange = document.querySelector('.catalog__title.title')
choiseYourChange.addEventListener('mouseover', function() {
console.log(choiseYourChange.textContent)})

  //ЗАДАНИЕ; ПУНКТ 7: ИЗМЕНИТЬ ЦВЕТ КНОПКИ
  
  const changeColorButton = document.querySelector('.change-color-button')
  changeColorButton.addEventListener('click', () => {
    changeColorButton.classList.toggle('active--button')
    // changeColorButton.style.backgroundColor = '#d62d2d86'
    // productCards[1].style.backgroundColor = '#d62d2d86'
    // productCard.style.backgroundColor = '#d62d2d86'
  })