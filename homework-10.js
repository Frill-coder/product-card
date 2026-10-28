import { cardsData } from "./cards-data.js";
const template = document.querySelector('#cards__template');
const container = document.querySelector('.products');

let count;
function checkCount() {
    const userText = prompt('Введите число от 1 до 5');
    const text = Number(userText);
    if (isNaN(text)) {
        alert('Вы ввели букву. Повторите еще раз');
        return checkCount();
    } else if (text < 1 || text > 5) {
        alert('Введите строго число от 1 до 5');
        return checkCount();
    } 
    count = text;
    return text;
}
console.log(checkCount())
console.log(count);

const products = cardsData.map((card) => {
    const copyTemplate = template.content.cloneNode(true);
    const images = copyTemplate.querySelector('.card__image');
    images.src = card.image;
    images.alt = card.altImg;
    const category = copyTemplate.querySelector('.card__category');
    category.textContent = card.category;
    const name = copyTemplate.querySelector('.card__name');
    name.textContent = card.name;
    const description = copyTemplate.querySelector('.card__description');
    description.textContent = card.description;
    const compound = copyTemplate.querySelectorAll('.card__compound li');
    compound.forEach((element, index) => {
        element.textContent = card.compound[index]
    })
    const value = copyTemplate.querySelector('.card__value');
    value.textContent = `${card.price} руб`;
    return copyTemplate.firstElementChild;
})
container.append(...products.slice(0, count));

const newArray = cardsData.reduce(function(result, user) {
    return {
        ...result, 
        [user.name]: user.description,
    }
},{})
console.log(newArray)