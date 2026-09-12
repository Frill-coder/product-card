// Уровень 1
// 2. Массив чисел и применение метода filter 
const numbers =  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const someNumbers = numbers.filter(num => num >= 5)
console.log(someNumbers)

// 3. Массив строк и проверка на наличие определённой сущности
const names = ["John", "Jane", "Jack", "Jill", "James"]
const hasJack = names.includes("Jack")
console.log(hasJack)

// 4. Функция, которая принимает массив и переворачивает его
 // 4.1 эта функция переворачивает массив, не возвращает новый массив, а изменяет исходный массив
numbers.reverse()
console.log(numbers)
 // 4.2 эта функция принимает массив и переворачивает его, и возвращает новый массив
const reverseArray = (arr) => {
    return arr.reverse();
}
console.log(reverseArray(numbers))
// 4.3 функция при ее вызове возвращает новый массив
function reverseArray2(arr) {
    return arr.reverse()
}
const products = [ "milk", "potato", "bread"]
reverseArray2(products)
console.log(products)

// Уровень 2 
// 6. импорт комментариев из файла comments.js
import { comments } from "./comments.js";

// 7. Вывод в консоль массив тех комментариев, почта пользователей которых содержит ".com"
const filterComments = comments.filter((comments) => 
    comments.email.includes(".com"))
console.log(filterComments)

// 8. Изменение массива
const idPostId = comments.map((comment) => {
    if (comment.id <= 5) {
        comment.postId = 2
    }
    else {
        comment.postId = 1  
    }
    return comment
})
console.log(idPostId)

// 9. Перебрать массив, что бы объекты состояли только из айди и имени
const idNameComments = comments.map((comment) => {
    return {
        id: comment.id,
        name: comment.name
    }
})
console.log(idNameComments)

// 10. Новое свойство с условием
const isInvalidComments = comments.map((comment) => {
    return { ...comment,
        isInvalid: comment.body.length > 180 ? true : false
    }
})
console.log(isInvalidComments)

// 11. Вывести массив почт с помощью метода map и reduce
const emails = comments.map((comment) => {
    return comment.email
})
console.log(emails)
const emailReduce = comments.reduce((acc, comment) => {
    acc.push(comment.email)
    return acc;
}, [])
console.log(emailReduce)

// 12. Перебрать массив из задания 11 и привести его к строке
const emailsString = emails.toString()
console.log(emailsString)
const emailsJoin = emails.join(", ")
console.log(emailsJoin)