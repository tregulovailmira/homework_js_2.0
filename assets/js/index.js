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
/*Таски на функции
1) Функция которая запрашивает число и проверяет простое ли оно
(простое число делится без остатка на себя и на единицу)*/

console.log(`Is this number a simple? ${isSimple()}`);
function isSimple() {
    const number = Number(prompt('Enter simple number:')); //prompt внутри функции, т.к. в задании указано "Функция которая запрашивает число.."
    if (isNaN(number)) {
        return 'Invalid value';
    };
    for(let i = 2; i < number; i++) {
        if (number % i === 0) {
            return false;
        }
    }
    return true;
};

/*2) Создать функцию checkMultiplicity, которая принимает два числа и проверяет кратность первого вторым:
checkMultiplicity(25, 5) // true
checkMultiplicity(15, 3) // true
checkMultiplicity(15, 5) // true
checkMultiplicity(15, 4) // false*/

const checkMultiplicity = (dividend, divider) => (dividend % divider === 0);

console.log(checkMultiplicity(25, 5));
console.log(checkMultiplicity(15, 3));
console.log(checkMultiplicity(15, 5));
console.log(checkMultiplicity(15, 4));

/*3) Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает
true если треугольник возможен и false если нет*/

const checkTriangle = (a, b, c) => ((a + b > c) && (b + c > a) && (a + c > b));
console.log(`The possibility of triangle: ${checkTriangle(10, 10, 10)}`);


/*4) Написать функции расчета площадей (поверхности) следующих фигур/тел:  треугольника, прямоугольника*/

const calcTriangleSquare = (base, height) => square = 1/2*base*height;
console.log(`Triangle square: ${calcTriangleSquare(15, 8)}`);

const calcRectangleleSquare = (sideA, sideB) => square = sideA * sideB;
console.log(`Rectangle square: ${calcRectangleleSquare(15, 8)}`);

/*Таски на объекты
1.1 создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.*/

const student = {
    name: 'Mike',
    surname: 'Simpson',
    gender: 'male',
    email: 'mikesimpson@gmail.com',
    phoneNumber: 1234556789,
};
console.log('Student: ', student);

//1.2 создать объект, который содержит свойства, о факультете и кафедре.

const education = {
    facultyName: 'Metallurgy',
    deanName: 'Robert Zane',
    facultyPhoneNumber: 1234567458,
    department: 'Ferrous metallurgy',
    chiefOfDepartment: 'Mike Ross',
    departmentPhoneNumber: 543295943,
};
console.log('Education: ', education);

// 2.1 Создать числовой массив и проинициализировать его

const array = [1, 0, 3, 4, 5, 0, 7 , 8, 0, 0];

// 2.1* (усложненное) инициализация с помощью случайных чисел

const randomArray = new Array(10);
console.log('Random array: ', arrayInitialization(randomArray));
function arrayInitialization (array) {
    for (i = 0; i < array.length; i++) {
        array[i] = Math.floor(Math.random()*100);
    }
    return array;
};

const randomArray2 = [];
console.log('Random array: ', arrayPushInitialization(randomArray2));
function arrayPushInitialization(array) {
    for (i = 0; i < 10; i++) {
        array.push(Math.floor(Math.random()*100));
    }
    return array;
};

// 2.2 Вывести размер массива

console.log(`Array length: ${randomArray.length}`);

// 2.3 Вывести элементы с четными индексами

for(i = 0; i < randomArray.length; i++) {
    if (i % 2 === 0) {
        console.log('i: ', i, 'item: ', randomArray[i]);
    }
}

// 2.4 Вывести только четные элементы (четные числа делятся на 2 без остатка)

for(i = 0; i < randomArray.length; i++) {
    if (randomArray[i] % 2 === 0) {
        console.log(randomArray[i]);
    }
}
// 2.5 Вывести индексы нулевых элементов (элемент равен нулю)

for(i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        console.log(i);
    }
}

// 2.6 Подсчитать количество нулевых элементов

let sum = 0;
for(i = 0; i < array.length; i++) {
    if (array[i] === 0) {
        sum++;
    }
}
console.log(`Amount of zero elements: ${sum}`);

/*3.1 Создать функции-конструкторы:
- Книга (автор, название, год издания, издательство)
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер)*/

function Book (author, name, yearOfPublishing, publishingHouse) {
    this.author = author;
    this.name = name;
    this.yearOfPublishing = yearOfPublishing;
    this.publishingHouse = publishingHouse;
}

function ElectronicVersionOfBook (author, name, yearOfPublishing, publishingHouse, format, electronicNumber) {
    this.author = author;
    this.name = name;
    this.yearOfPublishing = yearOfPublishing;
    this.publishingHouse = publishingHouse;
    this.format = format;
    this.electronicNumber = electronicNumber;
}

const fantasticBook = new Book('B.Werber', 'The imperium of angels', '2011', 'Ripol');
const fantasticBookElectronic = new ElectronicVersionOfBook('B.Werber', 'The imperium of angels', '2011', 'Ripol', 'electronic', 123456);
console.log(fantasticBook);
console.log(fantasticBookElectronic);

/*4 Дописать функцию конструктор MyArray.
    Должны быть реализованы следующие методы: push,pop,forEach*/

function MyArray() {
    this.length = 0;
    for (let i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
        this.length++;
    };
};

function ArrayMethods() {
    this.pop = function () {
        let lastElement = this[this.length-1];
        delete this[this.length-1];
        this.length = this.length - 1;
        return lastElement;
    };

    this.push = function () {
        for (let i = 0; i < arguments.length; i++) {
            this[this.length] = arguments[i];
            this.length++;
        }
        return this.length;
    };

    this.forEach = function (callback, thisArg = this) {
        for(let i = 0; i < thisArg.length; i++) {
            callback(thisArg[i], i, thisArg);
        }
    }
};

MyArray.prototype = new ArrayMethods();

const myArr = new MyArray('11', '22', '33', '44', '55');
console.log(myArr);
console.log(myArr.pop());
console.log(myArr);
console.log(myArr.push(2,2,2,2));
console.log(myArr);
myArr.forEach(function (item, i, arr) {
    arr[i]+=10;
});
console.log(myArr);