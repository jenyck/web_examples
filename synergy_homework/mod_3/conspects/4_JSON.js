/*
    Концепция JSON

    JSON (JavaScript Object Notation) - это формат данных, основанный на синтаксисе объектов JavaScript.
    Он представляет собой удобный способ передачи структурированных данных,
    таких как массивы, объекты, строки, числа и логические значения, между клиентом и сервером.

    JSON применяется для передачи данных по сети веб-серверов.
    Данные могут быть возвращены от сервера в формате JSON,
    затем распарсены на клиентской стороне для дальнейшего использования.

    Синтаксис JSON

    JSON использует простой синтаксис,
    состоящий из пар "ключ-значение".
    Ключи и значения разделяются двоеточием, а пары разделяются запятыми.
    JSON-данные всегда начинаются с фигурной скобки "{", заканчиваются фигурной скобкой "}"
    и содержат ключи и значения между ними.

    Файлы json необходимо создавать с расширением JSON (test.json)

    Вот пример JSON-данных:


    {
       "firstName": "Ivan",
       "lastName": "Sergeev",
       "age": 25,
       "address": {
          "street": "Pr. Mira",
          "city": "Moscow"
       },
       "phoneNumbers": [
          {
             "type": "home",
             "number": "555-555-1212"
          },
          {
             "type": "work",
             "number": "555-555-2121"
          }
       ]
    }



    В данном примере мы имеем объект, содержащий несколько ключей и значений,
    а также объект "address" и массив "phoneNumbers", содержащий объекты с несколькими ключами и значениями.

    Преобразование данных в JSON

    JavaScript имеет встроенную функцию JSON.stringify(),
    которая преобразует объекты JavaScript в JSON-строки. Например, следующий код преобразует объект в JSON-строку:

 */

const person = { name: "John", age: 30 };
const json = JSON.stringify(person);
console.log(json);

/*
    Вывод: {"name":"John","age":30}

    Преобразование JSON в данные JavaScript

    JavaScript также имеет встроенную функцию JSON.parse(), которая преобразует JSON-строки в объекты JavaScript.
    Например, следующий код преобразует JSON-строку в объект:
 */

const json = '{"name":"John","age":30}';
const person = JSON.parse(json);
console.log(person.name);

/*
    Вывод: John

    Работа с JSON-данными в JavaScript

    Для работы с JSON-данными в JavaScript можно использовать методы для преобразования и работы с данными.

    Для преобразования JSON-данных в объект JavaScript используется функция JSON.parse().

    Например:
 */

const json = '{"name":"John","age":30}';
const person = JSON.parse(json);
console.log(person.name); // выводит "John"

/*
    Для преобразования объектов JavaScript в JSON используется функция JSON.stringify().
    Например:
 */

const person = { name: "John", age: 30 };
const json = JSON.stringify(person);
console.log(json); // выводит '{"name":"John","age":30}'

/*
   Если в JSON-данных содержатся вложенные объекты или массивы,
   можно обращаться к ним с помощью точечной нотации или квадратных скобок,
   так же как и при работе с объектами JavaScript.

   Например:
 */

const json =
    '{"name":"Ivan","age":30,"address":{"street":"Pr. Mira","city":"Moscow"},"phoneNumbers":[{"type":"home","number":"555-555-1212"},{"type":"work","number":"555-555-2121"}]}';
const person = JSON.parse(json);
console.log(person.address.street); // выводит "Pr. Mira"
console.log(person.phoneNumbers[0].type); // выводит "home"

/*
    Если JSON-данные содержат специальные символы, такие как кавычки, слеши или переносы строк,
    они будут экранироваться.

    Например:
 */

const message = 'I said "hello"!';
const json = JSON.stringify(message);
console.log(json); // выводит ""I said \"hello\"!""

/*
    Также в JSON-данных могут использоваться числа, логические значения true/false, и ключи могут быть только строками.

    Например:
 */

const json = '{"isTrue":true,"number":123,"text":"Hello"}';
const data = JSON.parse(json);
console.log(data.isTrue); // выводит true
console.log(data.number); // выводит 123
console.log(data.text); // выводит "Hello"

/*
    JSON является удобным форматом данных для передачи между клиентом и сервером,
    и JavaScript предоставляет встроенные функции для преобразования данных в этот формат и обратно.
 */

//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание

    Задача 1
    Написать функцию, которая принимает объект и возвращает JSON-строку.
*/

function objectToJson(obj) {
    return JSON.stringify(obj);
}

// Пример использования:
const person = { name: "Ivan", age: 30 };
const json = objectToJson(person);
console.log(json); // выводит '{"name":"Ivan","age":30}'

/*
    Функция objectToJson использует метод JSON.stringify() для преобразования объекта в JSON-строку.

    Задача 2
    Написать функцию, которая принимает JSON-строку и возвращает объект.
 */
function jsonToObject(json) {
    return JSON.parse(json);
}

// Пример использования:
const json = '{"name":"Ivan","age":30}';
const person = jsonToObject(json);
console.log(person.name); // выводит "Ivan"

/*
    Функция jsonToObject использует метод JSON.parse() для преобразования JSON-строки в объект.

    Задача 3
    Написать функцию, которая принимает массив объектов и возвращает JSON-строку с массивом объектов.
 */

function arrayToJson(arr) {
    return JSON.stringify(arr);
}

// Пример использования:
const people = [
    { name: "John", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Bob", age: 40 },
];
const json = arrayToJson(people);
console.log(json); // выводит '[{"name":"John","age":30},{"name":"Jane","age":25},{"name":"Bob","age":40}]'

/*
    Функция arrayToJson использует метод JSON.stringify() для преобразования массива объектов в JSON-строку.

    Задача 4
    Написать функцию, которая принимает JSON-строку с массивом объектов и возвращает массив объектов.
 */

function jsonToArray(json) {
    return JSON.parse(json);
}

// Пример использования:
const json = '[{"name":"John","age":30},{"name":"Jane","age":25},{"name":"Bob","age":40}]';
const people = jsonToArray(json);
console.log(people[1].name); // выводит "Jane"

/*
    Функция jsonToArray использует метод JSON.parse() для преобразования JSON-строки в массив объектов.
 */

/*
    Задача 5.

    Написать функцию, которая принимает объект с вложенными объектами и массивами, и возвращает JSON-строку.



    Чтобы решить задачу, нужно написать функцию, которая принимает объект person и преобразует его в JSON-строку.
    Воспользуемся методом JSON.stringify() и передадим его вторым параметром функцию replacer.

*/

function complexObjectToJson(obj) {
    return JSON.stringify(
        obj,
        function (key, value) {
            if (value === undefined) {
                return null;
            } else {
                return value;
            }
        },
        2
    );
}

const person = {
    name: "Ivan",
    age: 30,
    address: { street: "Pr. Mira", city: "Moscow" },
    phoneNumbers: [
        { type: "home", number: "555-555-1212" },
        { type: "work", number: "555-555-2121" },
    ],
};

const json = complexObjectToJson(person);
console.log(json);

/*
    В функции complexObjectToJson() передаем два параметра:

    obj – объект, который нужно преобразовать в JSON-строку.
    Функция возвращает результат выполнения метода JSON.stringify(), который принимает три параметра:

    obj – объект, который нужно преобразовать в JSON-строку.
    replacer – функция, которая определяет, какие значения должны быть преобразованы в JSON-строку.
    space – количество пробелов для отступов.
    В функции replacer проверяем, если значение свойства объекта равно undefined,
    то возвращаем значение null, чтобы оно было включено в JSON-строку.
    Если значение не равно undefined, то возвращаем его.

    После выполнения функции complexObjectToJson() получим следующую JSON-строку:


{
  "name": "Ivan",
  "age": 30,
  "address": {
    "street": "Pr. Mira",
    "city": "Moscow"
  },
  "phoneNumbers": [
    {
      "type": "home",
      "number": "555-555-1212"
    },
    {
      "type": "work",
      "number": "555-555-2121"
    }
  ]
}


    Выводим результат работы функции complexObjectToJson() в консоль с помощью метода console.log().
 */
