/*
    Ключевое слово const в JavaScript используется для объявления переменных,
    которые нельзя переназначить после инициализации. Кроме того, значение const не может быть изменено.

    Для объявления переменной с использованием const, просто используйте ключевое слово const,
    за которым следует имя переменной, затем знак равенства и значение, которому вы хотите присвоить.
    Пример:
 */

const PI = 3.14159;

/*
    В этом примере мы объявляем переменную PI и присваиваем ей значение 3.14159.
    Значение этой переменной не может быть изменено позже в коде.

    Если вы попытаетесь переназначить переменную, объявленную с помощью const, вы получите ошибку.
    Например:
 */

const PI = 3.14159;
PI = 3; // Вы получите ошибку, так как пытаетесь переназначить константу

/*
    При этом можно обновлять содержимое объектов, созданных с помощью const,
    если объект не объявлен как неизменяемый.
    Пример:
 */

const person = { name: 'Иван', age: 30 };
person.age = 31; // Обновление свойства возраст
console.log(person); // { name: 'Иван', age: 31 }

/*
    Этот код обновляет значение свойства age объекта person, объявленного с помощью const.

    Важно знать, что const не означает, что значение переменной является неизменяемым.
    Это означает, что сама переменная не может быть переназначена после инициализации.
    Если вы хотите защитить значение от изменений, вам нужно использовать другие методы, например,
    создание неизменяемых объектов или использование функций-акцессоров.

    Кроме того, использование const может улучшить читаемость вашего кода
    и предотвратить неожиданные изменения значений переменных.
    В целом, если вы знаете, что переменная не будет изменена позже в коде, используйте const.

    Ниже приведен пример использования const для объявления константных значений:
 */

const GRAVITY = 9.8; // Константа для ускорения свободного падения
const USERNAME = 'user123'; // Константа для имени пользователя
const WEEKDAYS = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']; // Константа для массива дней недели

//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание

    Задача 1
    Напишите функцию isPrime, которая принимает целое число и возвращает true,
    если число простое, и false, если число не является простым.
*/

function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(7)); // true
console.log(isPrime(12)); // false


/*
    В этом коде мы сначала проверяем, является ли число меньшим или равным 1 (в этом случае оно не может быть простым).
    Затем мы проверяем, делится ли число на любое число от 2 до num - 1.
    Если да, то это не простое число. В противном случае число простое.

    Задача 2
    Напишите функцию getFibonacciSequence,
    которая принимает целое число n и возвращает первые n чисел в последовательности Фибоначчи.
 */

function getFibonacciSequence(n) {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, n);
}

console.log(getFibonacciSequence(7)); // [0, 1, 1, 2, 3, 5, 8]
console.log(getFibonacciSequence(10)); // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

/*
    В этом коде мы создаем массив sequence, содержащий первые два числа последовательности Фибоначчи.
    Затем мы используем цикл for, чтобы добавить следующие числа в массив, складывая два предыдущих числа.
    Наконец, мы возвращаем первые n чисел в массиве.


    Задача 3
    Напишите функцию countWords, которая принимает строку и возвращает количество слов в строке.
 */

function countWords(str) {
    return str.split(' ').length;
}

console.log(countWords('Hello, world!')); // 2
console.log(countWords('The world world world world world world world world')); // 9

/*
    В этом коде мы используем метод split для разделения строки на массив подстрок, разделенных пробелами.
    Затем мы используем свойство length массива, чтобы вернуть количество элементов в массиве,
    что равно количеству слов в строке.

    Задача 4
    Напишите функцию getMaxValue, которая принимает массив чисел и возвращает максимальное значение в массиве
 */


function getMaxValue(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(getMaxValue([1, 5, 3, 9, 2, 8])); // 9
console.log(getMaxValue([-1, -5, -3, -9, -2, -8])); // -1

/*
    В этом коде мы создаем переменную max и инициализируем ее первым элементом массива.
    Затем мы используем цикл for, чтобы перебрать все элементы массива,
    и сравниваем каждый элемент с текущим максимальным значением.
    Если элемент больше максимального значения, мы обновляем max. В конце мы возвращаем max.

    Задача 5
    Напишите функцию reverseString, которая принимает строку и возвращает перевернутую строку.
 */

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

console.log(reverseString('Hello, world!')); // !dlrow ,olleH
console.log(reverseString('The quick brown fox')); // xof nworb kciuq ehT

/*
    В этом коде мы создаем переменную reversed и инициализируем ее пустой строкой.
    Затем мы используем цикл for, чтобы перебрать все символы в строке,
    начиная с последнего символа и заканчивая первым.
    В каждой итерации мы добавляем текущий символ в начало переменной reversed.
    В конце мы возвращаем переменную reversed.
 */