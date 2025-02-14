/**

 Функции в JavaScript - это блоки кода, которые имеют свое имя (кроме анонимных) и могут быть вызваны по этому имени.

 Функции  в JavaScript бывают встроенными, например alert() и пользовательскими, которые программист создает сам.

 В Функции в JavaScript могут передаваться некоторые параметры, например необходимые для вычисления возвращаемых значений.

 Функции в JavaScript являются объектами, и как следствие могут, например, присваиваться переменным,
 передаваться другим функциям, можно присваивать значения их свойствам и вызывать их методы.
 (Понятие объекта мы рассмотрим более подробно в следующем уроке).


 Функция создается с помощью команды function. Далее через пробел следует имя функции, круглые скобки, а затем фигурные скобки,
 в которых пишется какой-то код:

 function func() {
	// какой-то код
}
 Давайте посмотрим на каком-нибудь примере. Сделаем функцию с именем func, которая при своем вызове будет выводить алертом
 восклицательный знак:

 function func() {
	console.log('!');
}
 Давайте теперь вызовем нашу функцию. Для этого необходимо написать ее имя и круглые скобки:

 function func() {
	console.log('!');
}

 // Вызываем нашу функцию:
 func(); // выведет '!'
 Можно вызвать нашу функцию несколько раз - в этом случае каждый вызов функции будет выдавать новый алерт:

 function func() {
	console.log('!');
}

 func(); // выведет '!'
 func(); // выведет '!'
 func(); // выведет '!'
 Функции могут быть вызваны до места своего определения:

 func(); // выведет '!'

 function func() {
	console.log('!');
}



 Функции могут принимать параметрами данные. Для примера давайте сделаем функцию, которая параметром будет принимать число:

 function func(num) {

}
 Давайте сделаем так, чтобы функция возводила переданное число в квадрат:

 function func(num) {
	console.log(num ** 2);
}
 Проверим работу функции, вызвав ее с различными числами:

 func(2); // выведет 4
 func(3); // выведет 9


 Функция может принимать не один параметр, а несколько. В этом случае их нужно перечислить через запятую.
 Давайте для примера сделаем функцию, параметром принимающую два числа и выводящую в консоль их сумму:

 function func(num1, num2) {
	console.log(num1 + num2);
}
 Проверим работу нашей функции:

 func(1, 2); // выведет 3




 В параметры функции можно передавать переменные. Давайте посмотрим на примере. Пусть у нас есть следующая функция:

 function func(num) {
	console.log(num ** 2);
}
 Пусть у нас есть переменная:

 let param = 2;
 Вызовем нашу функцию, передав ей параметром число из переменной:

 let param = 2;
 func(param);




 Параметры функций можно делать не обязательными. Для этого параметрам нужно задать значения по умолчанию.
 Пусть для примера у нас есть следующая функция:

 function func(num) {
	console.log(num ** 2);
}
 Давайте сделаем так, чтобы этот параметр по умолчанию имел значение 0:

 function func(num = 0) {
	console.log(num ** 2);
}
 Проверим работу нашей функции с параметром:

 func(2); // выведет 4
 Проверим работу нашей функции без параметра:

 func(); // выведет 0



 Пусть у нас есть функция, которая выводит в консоль квадрат переданного числа:

 function func(num) {
	console.log(num ** 2);
}
 Пусть мы хотим не выводить значение в консоль, а записать в какую-нибудь переменную, вот так:

 let res = func(3); // в переменной res теперь 9
 Для этого в JavaScript существует специальная инструкция return, которая позволяет указать значение, которое возвращает функция.
 Под словом "возвращает" понимают то значение, которое запишется в переменную, если ей присвоить вызванную функцию.

 Итак, давайте перепишем нашу функцию так, чтобы она не выводила результат в консоль, а возвращала его в переменную:

 function func(num) {
	return num ** 2;
}
 Вызовем теперь нашу функцию, записав ее ответ в переменную:

 let res = func(3); // в переменную запишется 9
 После того, как данные записаны в переменную, их можно, например, вывести в консоль:

 let res = func(3);
 console.log(res); // выведет 9
 А можно сначала как-то изменить эти данные, а затем вывести их в консоль:

 let res = func(3);
 res = res + 1;
 console.log(res); // выведет 10
 Можно сразу выполнять какие-то действия с результатом работы функции перед записью в переменную:

 let res = func(3) + 1;
 console.log(res); // выведет 10
 А можно не записывать результат в переменную, а сразу вывести его в консоль:

 console.log(func(3)); // выведет 9
 Можно вызвать функцию в одном выражении с различными параметрами:

 let res = func(2) + func(3);
 console.log(res); // выведет 13


 Можно также результат работы одной функции передать параметром в другую, например, вот так мы сначала найдем квадрат числа 2,
 а затем квадрат результата:

 function func(num) {
	return num ** 2;
}

 let res = func(func(2));
 console.log(res); // выведет 16
 Функции, конечно же, не обязательно должны быть одинаковыми. Пусть, например, у нас есть функция, возвращающая квадрат числа,
 и функция, возвращающая куб числа:

 function square(num) {
	return num ** 2;
}

 function cube(num) {
	return num ** 3;
}
 Давайте с помощью этих функций возведем число 2 в квадрат, а затем результат этой операции возведем в куб:

 let res = cube(square(2));
 console.log(res);
 Пусть теперь у нас есть функция, возвращающая квадрат числа, и функция, находящая сумму двух чисел:

 function square(num) {
	return num ** 2;
}

 function sum(num1, num2) {
	return num1 + num2;
}
 Найдем с помощью этих функций сумму квадрата числа 2 и квадрата числа 3:

 let res = sum(square(2), square(3));
 console.log(res);


 После того, как выполнится инструкция return - функция закончит свою работу и никакой код дальше не выполнится. Смотрите пример:

 function func(num) {
	return num ** 2;

	console.log('!'); // этот код никогда не выполнится
}

 let res = func(3);
 Это не значит, что в функции должен быть один return. Но выполнится только один из них. В следующем примере в зависимости
 от значения параметра выполнится либо первый, либо второй return:

 function func(num) {
	if (num >= 0) {
		return '+++';
	} else {
		return '---';
	}
}

 console.log(func( 3)); // выведет '+++'
 console.log(func(-3)); // выведет '---'



 Пусть у нас есть функция, возвращающая сумму чисел от 1 до 5:

 function func() {
	let sum = 0;

	for (let i = 1; i <= 5; i++) {
		sum += i;
	}

	return sum;
}

 let res = func();
 console.log(res); // выведет 15
 Пусть теперь мы расположим return внутри цикла, вот так:

 function func() {
	let sum = 0;

	for (let i = 1; i <= 5; i++) {
		sum += i;
		return sum;
	}
}

 let res = func();
 console.log(res);
 В этом случае цикл прокрутится лишь одну итерацию и произойдет автоматический выход из функции (ну и заодно из цикла).
 А за одну итерацию цикла в переменной sum окажется лишь число 1, а не вся нужная сумма.


 То, что return расположен внутри цикла, не всегда может быть ошибкой. В следующем примере сделана функция, которая определяет,
 сколько первых элементов массива нужно сложить, чтобы сумма стала больше или равна 10:

 function func(arr) {
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];

		// Если сумма больше или равна 10:
		if (sum >= 10) {
			return i + 1; // выходим из цикла и из функции
		}
	}
}

 let res = func([1, 2, 3, 4, 5]);
 console.log(res);
 А в следующем примере сделана функция, которая вычисляет, сколько целых чисел, начиная с 1, нужно сложить, чтобы результат был больше 100:

 function func() {
	let sum = 0;
	let i = 1;

	while (true) { // бесконечный цикл
		sum += i;

		if (sum >= 100) {
			return i; // цикл крутится пока не выйдет тут
		}

		i++;
	}
}

 console.log( func() );



 Существуют некоторые приемы работы с return, упрощающие код. Рассмотрим, к примеру, следующий код:

 function func(num) {
	let res;

	if (num >= 0) {
		res = Math.sqrt(num);
	} else {
		res = 0;
	}

	return res;
}

 console.log(func(3));
 Как вы видите, в данном коде в зависимости от условия в переменную res будет попадать либо одно, либо другое значение.
 А последней строкой функции содержимое переменной res возвращается через return.

 Давайте перепишем этот код в более сокращенной форме, избавившись от ненужной здесь переменной res:

 function func(num) {
	if (num >= 0) {
		return Math.sqrt(num);
	} else {
		return 0;
	}
}

 console.log(func(3));




 В функциях можно использовать флаги в неявном виде с помощью инструкции return. Давайте посмотрим, как это делается.
 Пусть у нас есть следующая функция, проверяющая, что все элементы массива положительные числа:

 function isPositive(arr) {
	let flag = true;

	for (let elem of arr) {
		if (elem < 0) {
			flag = false;
		}
	}

	return flag;
}
 Давайте перепишем код функции с помощью неявного использования флагов:

 function isPositive(arr) {
	for (let elem of arr) {
		if (elem < 0) {
			return false;
		}
	}

	return true;
}
 Как это работает: если в массиве найдется нужный элемент - мы выйдем из функции (и из цикла тоже) с помощью return.
 Но если в массиве не найдется нужный элемент - выхода из функции не произойдет и выполнение дойдет до команды
 return true. И получится, что функция вернет true в знак того, что в массиве все элементы положительные.






 Пусть у нас есть функция с ифом. Вот она:

 function func(a, b) {
	if (a > b) {
		return true;
	} else {
		return false;
	}
}
 Как вы уже знаете из предыдущих уроков, конструкции if, возвращающие булевы значения,
 можно переписывать в сокращенной форме. Давайте сделаем это:

 function func(a, b) {
	return a > b;
}
 _________________________________________________________________________________________________________________

 Итоги

 1 Имя каждой функции должно точно отражать то, что функция делает.

 2 Функция должна делать только то, что явно подразумевается её названием, и не делать другого.

 3 Каждая функция должна выполнять только одно действие.

 4 Используйте внутри функций вспомогательные функции.

 5 Код функций лучше не делать длиннее 10-15 строк.

 6 Длинные функции лучше разбивать на ряд вспомогательных.

 7 Используйте общепринятые префиксы в именах функций: show, get, set, calc, create, change, check.

 8 Выносите дублирующийся код в функции.
 _________________________________________________________________________________________________________________
 Домашняя работа

 1 Сделайте функцию, выводящую в консоль сумму чисел от 1 до 100.

 2 Сделайте функцию, которая параметром принимает число и выводит в консоль куб этого числа.

 3 Сделайте функцию, которая параметром будет принимать массив и возвращать сумму его элементов.

 4 Сделайте функцию, которая параметром будет принимать строку и возвращать массив ее символов.

 5 Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит.

 6 Сделайте функцию, которая параметром будет принимать строку и переворачивать ее символы в обратном порядке.

 **/
