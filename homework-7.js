const city = 'Татаюрт'
const temp = '36'
function showTemperature () {
    console.log(`Сейчас в городе ${city} температура — ${temp} градусов по Цельсию`)
}
showTemperature()

const LIGHTSPEED = (299792458)
function checkSpeed (LIGHTSPEED) {
    if (LIGHTSPEED > 299792458) {
        console.log('Сверхсветовая скорость')
    }
    else if (LIGHTSPEED < 299792458){
        console.log('Субсветовая скорость')
    }
    else  {
        console.log('Скорость света')
    }
}
checkSpeed(2997555458)

let product = ('Ноутбук')
let value = ('96000')
function buyProduct (budget) {
    if (budget > 96000) {
        console.log(`${product} приобретён. Спасибо за покупку!`)
    }
    else if (budget < 96000) {
        let lack = (96000 - budget)
        console.log(`Вам не хватает ${lack}, пополните баланс`)
    }
}
buyProduct(102000)