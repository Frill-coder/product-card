let area = (city, temp) => {
    console.log(`Сейчас в городе ${city} температура — ${temp} градусов по Цельсию`)
}
area('Кизляр', '36')

const LIGHTSPEED = (299792458)
function checkSpeed (LIGHTSPEED) {
    if (LIGHTSPEED > 299792458) {
        console.log('Сверхсветовая скорость')
    }
    else if (LIGHTSPEED < 299792458){
        console.log('Субсветовая скорость')
    }
    else if (LIGHTSPEED === 299792458) {
        console.log('Скорость света')
    }
}
checkSpeed(299792458)

let product = ('Ноутбук')
let value = ('96000')
function buing (budget) {
    if (budget > 96000) {
        console.log(`${product} приобретён. Спасибо за покупку!`)
    }
    else if (budget < 96000) {
        let need = (96000 - budget)
        console.log(`Вам не хватает ${need}, пополните баланс`)
    }
}
buing(10000)