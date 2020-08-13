/*Таски на условия
1) Делится ли число на 5, или на 3, или на 2 без остатка?*/

function isMultiplicity(number) {
    return (number % 5 === 0 || number % 3 === 0 || number % 2 === 0);
};
console.log(`Is this number a multiplicity by 5 or 3 or 2? ${isMultiplicity(5)}`);

/*Таски на switch - ДЗ
1) Переменная num может принимать 4 значения: 1, 2, 3 или 4. Если она имеет значение '1', то в переменную result
запишем 'зима', если имеет значение '2' – 'весна' и так далее. Решите задачу через switch-case. */

let num = 1;
console.log(`The season is: ${getSeason(num)}`);

function getSeason(num) {
    switch (num) {
        case 1: {
            return result = 'зима';
        }
            break;
        case 2: {
            return result = 'весна';
        }
            break;
        case 3: {
            return result = 'лето';
        }
            break;
        case 4: {
            return result = 'осень';
        }
            break;
        default: return result = 'Unknown value';
    }
};

/*2)  В переменной month лежит какое-то число из интервала от 1 до 12. Определите в какую пору года попадает этот месяц
(зима, лето, весна, осень).*/

let month = 11;
console.log(`The season of this month is: ${getMonthSeason(month)}`);

function getMonthSeason(month) {
    switch (month) {
        case 12:
        case 1:
        case 2: {
            return result = 'зима';
        }
            break;
        case 3:
        case 4:
        case 5: {
            return result = 'весна';
        }
            break;
        case 6:
        case 7:
        case 8: {
            return result = 'лето';
        }
            break;
        case 9:
        case 10:
        case 11: {
            return result = 'осень';
        }
            break;
        default: return result = 'Unknown value';
    }
};

/*3) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если
пользователь вводит 7 -  выводится сообщение "воскресенье"). предусмотреть ошибку введения (default)*/

const dayNumber = prompt('Enter the number of day (from 1 to 7):');
console.log(`The day of a week is: ${getDayOfWeek(dayNumber)}`);

function getDayOfWeek(dayNumber) {
    switch (dayNumber) {
        case '1':
            return 'понедельник';
            break;
        case '2':
            return 'вторник';
            break;
        case '3':
            return 'среда';
            break;
        case '4':
            return 'четверг';
            break;
        case '5':
            return 'пятница';
            break;
        case '6':
            return 'суббота';
            break;
        case '7':
            return 'воскресенье';
            break;
        default: return 'Unknown value';
    }
};

/*4) В переменной day лежит какое-то число из интервала от 1 до 31. Определите в какую декаду месяца попадает это число
(в первую, вторую или третью).*/

let day = 10;
console.log(`The decade of a month is: ${getDecadeOfMonth(day)}`);

function getDecadeOfMonth(day) {
    switch (day) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
            return 'First decade';
            break;
        case 11:
        case 12:
        case 13:
        case 14:
        case 15:
        case 16:
        case 17:
        case 18:
        case 19:
        case 20:
            return 'Second decade';
            break;
        case 21:
        case 22:
        case 23:
        case 24:
        case 25:
        case 26:
        case 27:
        case 28:
        case 29:
        case 30:
        case 31:
            return 'Third decade';
            break;
        default: return 'Unknown value';
    }
};

/*Таски на циклы (Only FOR)
1) Вывести факториал запрошенного числа.*/

console.log(`Factorial: ${calcFactorial(5)}`);
function calcFactorial(n) {
    let result = 1;
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result;
};

/*2) вычислить сумму первых N элементов последовательности 1 + 1/2 + 1/3 + ...+ 1/N . параметр N задает пользователь*/

const n = Number(prompt('Enter n:'));
console.log(calcSumOfSequenceOfElements(n));
function calcSumOfSequenceOfElements(n){
    if (isNaN(n)) {
        return 'Invalid value';
    };
    let result = 0;
    for (let i = 1; i <= n; i++) {
        result += 1 / i;
    }
    return `The sum of sequence of elements: ${result}`;
};

/*3) Найти произведение чисел в пределах от lim1 до lim2 (например, если lim1=5 и lim2=12 то это произведение
всех чисел от 5 до 12). */

console.log(`The product of range: ${calcProductOfRange(5, 12)}`);
function calcProductOfRange (lim1, lim2) {
    let result = 1;
    for (let i = lim1; i <= lim2; i++) {
        result *= i;
    }
    return result;
};