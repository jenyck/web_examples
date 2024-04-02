/*
    Простая функция с Async/Await
 */

// Создаем простую функцию, которая возвращает Promise после 1 секунды ожидания
async function waitOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Done waiting!";
}

// Вызываем функцию с помощью async/await
async function run() {
    console.log("Начинаем ждать...");
    const result = await waitOneSecond();
    console.log(result);
}

// Запускаем функцию
run();

/*
    Мы создали простую функцию, которая ждет одну секунду, а затем возвращает строку.
    Затем мы создали другую функцию, которая вызывает эту первую функцию, используя async/await.
    Когда мы запускаем вторую функцию, она ждет, пока первая функция не выполнится, а затем выводит результат.



    Использование try/catch с Async/Await
 */


// Создаем функцию, которая возвращает Promise, который иногда вызывает ошибку
async function maybeThrowError() {
    if (Math.random() < 0.5) {
        throw new Error("Oops, something went wrong!");
    }
    return "All good!";
}

// Вызываем функцию с помощью async/await и используем try/catch для обработки ошибки
async function run() {
    try {
        const result = await maybeThrowError();
        console.log(result);
    } catch (error) {
        console.error(error);
    }
}

// Запускаем функцию
run();

/*
    Мы создали функцию, которая иногда вызывает ошибку, а затем создали другую функцию,
    которая вызывает эту первую функцию с помощью async/await и использует try/catch для обработки ошибки, если она возникнет.
    Если функция выполняется без ошибок, результат выводится в консоль.
    Если возникает ошибка, она выводится в консоль с помощью console.error.

    Использование Promise.all с Async/Await
 */

// Создаем две простые функции, каждая из которых возвращает Promise после 1 секунды ожидания
async function waitOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Done waiting one second!";
}

async function waitTwoSeconds() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Done waiting two seconds!";
}

// Вызываем обе функции с помощью Promise.all и async/await
async function run() {
    const [result1, result2] = await Promise.all([waitOneSecond(), waitTwoSeconds()]);
    console.log(result1);
    console.log(result2);
}

// Запускаем функцию
run();

/*
    Мы создали две простые функции, каждая из которых возвращает Promise после ожидания различных интервалов времени.
    Затем мы создали третью функцию, которая вызывает обе предыдущие функции с помощью Promise.all и async/await.
    Функция Promise.all позволяет вызывать несколько асинхронных функций одновременно и ждать, пока все они завершатся.
    Когда оба Promise разрешены, мы выводим их результаты в консоль.


    Использование Async/Await с Fetch API
 */


// Создаем функцию, которая получает данные с помощью Fetch API и возвращает Promise
async function fetchData(url) {
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

// Вызываем функцию и выводим результат в консоль
async function run() {
    const data = await fetchData('https://jsonplaceholder.typicode.com/todos/1');
    console.log(data);
}

// Запускаем функцию
run();

/*
    Мы создали функцию, которая получает данные с помощью Fetch API и возвращает Promise.
    Затем мы вызвали эту функцию с помощью async/await и вывели результат в консоль.
    Fetch API позволяет легко получать данные из сети,
    и использование Async/Await позволяет нам легко работать с этими данными в асинхронном режиме.




    Использование Async/Await в циклах
 */


// Создаем функцию, которая возвращает Promise после 1 секунды ожидания
async function waitOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "Done waiting one second!";
}

// Вызываем функцию в цикле с помощью async/await
async function run() {
    for (let i = 0; i < 5; i++) {
        const result = await waitOneSecond();
        console.log(result);
    }
}

// Запускаем функцию
run();

/*
    Мы создали функцию, которая ждет одну секунду, а затем возвращает строку.
    Затем мы создали другую функцию, которая вызывает эту первую функцию в цикле,
    используя async/await.
    Каждый раз, когда мы вызываем функцию, мы ждем, пока она не выполнится, а затем выводим результат в консоль.
    Это позволяет нам легко работать с асинхронными операциями в циклах.


    Использование Использование Async/Await с Promise.race
 */


// Создаем две функции, которые возвращают Promise после ожидания различных интервалов времени
async function waitOneSecond() {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return "One second";
}

async function waitTwoSeconds() {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return "Two seconds";
}

// Вызываем функции с помощью Promise.race и async/await
async function run() {
    const result = await Promise.race([waitOneSecond(), waitTwoSeconds()]);
    console.log(result);
}

// Запускаем функцию
run();


/*
    Мы создали две функции, которые возвращают Promise после ожидания различных интервалов времени.
    Затем мы вызвали эти функции с помощью Promise.race и async/await.
    Функция Promise.race позволяет вызывать несколько асинхронных функций одновременно и возвращать результат той,
    которая завершится первой. В этом примере мы выводим результат, который приходит первым в консоль.
 */

//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание



    Задача 1
    Напишите асинхронную функцию, которая принимает два числа и возвращает их сумму.
*/

async function sum(a, b) {
    return a + b;
}

/*
    Мы создали асинхронную функцию sum, которая принимает два числа и возвращает их сумму.
    Операция сложения выполняется мгновенно, поэтому мы можем сразу же возвращать результат.

    Задача 2
    Напишите асинхронную функцию, которая принимает массив чисел и возвращает их сумму.
 */

async function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total;
}

/*
    Мы создали асинхронную функцию sum, которая принимает массив чисел и возвращает их сумму.
    Мы проходим по всем элементам массива и складываем их в переменную total, которую затем возвращаем.


    Задача 3
    Напишите асинхронную функцию, которая принимает массив строк и возвращает их в обратном порядке.
 */

async function reverseStrings(strings) {
    return strings.reverse();
}

/*
     Мы создали асинхронную функцию reverseStrings,
     которая принимает массив строк и возвращает их в обратном порядке с помощью метода reverse.

     Задача 4
     Напишите асинхронную функцию, которая принимает два числа и возвращает их произведение с задержкой в одну секунду.
 */


async function multiplyWithDelay(a, b) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return a * b;
}

/*
    Мы создали асинхронную функцию multiplyWithDelay,
    которая принимает два числа и возвращает их произведение с задержкой в одну секунду.
    Мы используем метод setTimeout для задержки выполнения на одну секунду.

    Задача 5
    Напишите асинхронную функцию, которая принимает массив чисел и возвращает среднее значение с задержкой в две секунды.
 */

async function averageWithDelay(numbers) {
    await new Promise(resolve => setTimeout(resolve, 2000));
    let total = 0;
    for (let number of numbers) {
        total += number;
    }
    return total / numbers.length;
}

/*
     Мы создали асинхронную функцию averageWithDelay,
     которая принимает массив чисел и возвращает среднее значение с задержкой в две секунды.
     Мы сначала ждем две секунды, используя метод setTimeout, чтобы создать задержку.
     Затем мы проходим по всем элементам массива и складываем их в переменную total, чтобы вычислить сумму.
     Затем мы делим сумму на длину массива, чтобы получить среднее значение, и возвращаем его.
 */