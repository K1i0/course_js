/*
Методом prompt получите ответ пользователя на вопрос "Сколько будет 7 + или - 15?".
Если ответ верен, выведите в консоли "Успех", если нет - "Вы робот!", 
а если он введёт "Я не робот", то тоже "Успех".
*/

const userAnswer =  prompt('Сколько будет 7 + или - 15?');

let message;
switch(userAnswer) {
    case '22':
    case '-8':
    case 'Я не робот':
        message = 'Успех';
        break;
    default:
        message = 'Вы робот!';
}

console.log(message);