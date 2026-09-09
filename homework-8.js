// 3. ОБЪЕКТ НА ОСНОВЕ МОИХ ДАННЫХ
const user = {
    name: 'Захират',
    lastName: 'Гаджимагомедова',
    age: 19,
    email: 'email@example.com',
    city: 'Кизляр',
    country: 'Россия',
    relationshipStatus: 'Замужем'
}
console.log(user)

// 4. Объект с данными о машине со значением-объектом
const car = {
    brand: 'Toyota',
    model: 'Camry',
    year: 2020,
    color: 'Синий',
    engine: '2.5L 4-цилиндровый',
    transmission: 'Автоматическая'
}
car.owner = user
console.log(car)

// 5. Функция, котороя принимает объект и выводит его свойство 
function chekMaxSpeed (obj, field) {
    if (field in obj) {
        console.log(obj[field])
    }
    else {
        obj[field] = 234;
        console.log(obj[field])
    }
}
chekMaxSpeed(car, "maxSpeed")

// 6. Принятие функцией объетка и свойства, вывод его значения
function showValue (key, value) {
    console.log(key[value])
}
showValue(car, "brand")

// 7. Массив с названиями фруктов
const fruits = [ "apple", "orande", "peer", "banana", "orange", "pineapple"]

// 8.Массив объектов, и ещё один
const books = [
    {
    title: "Вишневый сад",
    author: "А. П. Чехов",
    year: 2026
},
{
    title: "Бесы",
    author: "Ф. м. Достоевский",
    year: 1986
},
{
    title: "Средь бело дня",
    author: "М. Ю. Лохвицкий",
    year: 1978
}]
books.push({
    title: "Маленькие женщины",
    author: "Л. М. Олкотт",
    year: 2025
})
console.log(books)

// 9. Создать новый массив и объединить с предыдущим в один, используя оператор
const universeJurassicPark = [{
    title: "Парк Юрского периода",
    author: "Д. М. Крайтон",
    year: 1990
}]
const myLiblary = [...books, ...universeJurassicPark]
console.log(myLiblary)

// 10. Создание функции для массива
// способ 1
function chekRaise (book) {
    if (book.year < 2000) {
        book.isRare = true;
        console.log(`${book.title} is a rare book.`);
    }
    else {
        console.log(`${book.title} is not a rare book.`);
    }
}
// так или так можно вызвать функцию для каждого элемента массива
// myLiblary.forEach(chekRaise); 
chekRaise(myLiblary);

// способ 2
const rareBooks = myLiblary.map((book) => {
    return book.year < 2000 
})
console.log(rareBooks)