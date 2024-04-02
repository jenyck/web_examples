/*
    Хуки (Hooks) - это новая возможность, которую добавили в React 16.8.
    Они позволяют использовать состояние и другие функции React без написания классовых компонентов.
    Рассмотрим, как работать с хуками в React.

    Использование состояния с помощью useState
    Хук useState позволяет добавлять состояние в функциональный компонент.
    Это один из самых популярных хуков в React.
 */

import React, { useState } from 'react';

function Example() {
    // Объявляем новую переменную состояния, которую назовем "count"
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

/*
    В этом примере мы создаем новую переменную состояния count и устанавливаем ее начальное значение в 0, используя хук useState.
    Затем мы выводим текущее значение count в нашем компоненте и добавляем обработчик события на кнопку,
    который вызывает setCount для увеличения значения count на 1.

    Использование эффектов с помощью useEffect
    Хук useEffect позволяет выполнить побочный эффект в функциональном компоненте.
    Побочные эффекты могут быть любыми действиями, которые не относятся к рендерингу компонента, например,
    загрузка данных с сервера или изменение заголовка страницы.
 */

import React, { useState, useEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Обновляем заголовок документа, используя API браузера
        document.title = `Вы кликнули ${count} раз(а)`;
    });

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

/*
    В этом примере мы используем хук useEffect, чтобы обновить заголовок документа,
    каждый раз когда count изменяется. Заголовок документа обновляется, используя API браузера document.title.
    При этом мы не передаем второй аргумент, поэтому эффект будет выполняться при каждом изменении состояния компонента.

    Использование контекста с помощью useContext
    Хук useContext позволяет использовать контекст в функциональном компоненте.
    Контекст позволяет передавать данные глубоко в дерево компонентов без необходимости передавать пропсы через каждый компонент.
 */

import React, { useContext } from 'react';

const ThemeContext = React.createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    const theme = useContext(ThemeContext);
    return (
        <div>
            <button style={{ background: theme === 'dark' ? 'black' : 'white', color: theme === 'dark' ? 'white' : 'black' }}>
                Кнопка
            </button>
        </div>
    );
}

/*
    В этом примере мы создаем контекст ThemeContext с начальным значением 'light'.
    Затем мы оборачиваем компонент Toolbar в провайдер ThemeContext.Provider и передаем значение 'dark'.

    В компоненте Toolbar мы используем хук useContext для получения значения theme из контекста ThemeContext.
    Затем мы используем это значение, чтобы изменить стиль кнопки.




    Использование колбэков с помощью useCallback
    Хук useCallback позволяет кэшировать колбэки, чтобы предотвратить повторное создание функций при каждом рендере компонента.
    Это особенно полезно при передаче колбэков в дочерние компоненты, так как это может привести к нежелательной перерисовке этих компонентов.
 */

import React, { useState, useCallback } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={increment}>
                Нажми на меня
            </button>
        </div>
    );
}

/*
    В этом примере мы создаем переменную increment, используя хук useCallback.
    Мы передаем функцию увеличения значения count в setCount и зависимость [count].
    Таким образом, функция increment будет создана только один раз при монтировании компонента, а не при каждом рендере.





    Использование ссылок с помощью useRef
    Хук useRef позволяет создавать ссылки на элементы DOM или другие значения,
    которые не будут вызывать повторный рендер компонента при изменении.
 */

import React, { useRef } from 'react';

function Example() {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>
                Фокус
            </button>
        </div>
    );
}

/*
    Мы используем хук useRef для создания ссылки inputRef на элемент input.
    Затем мы создаем функцию handleClick, которая вызывает метод focus() на ссылке inputRef, чтобы установить на него фокус.

    В компоненте мы передаем ссылку inputRef в ref атрибут элемента input.
    При клике на кнопку "Фокус" будет вызвана функция handleClick, которая вызывает метод focus() на элементе input.





    Использование хуков useEffect и useLayoutEffect
    Хуки useEffect и useLayoutEffect позволяют выполнять побочные эффекты, такие как изменение заголовка страницы,
    отправка запросов на сервер и установка обработчиков событий.
 */

import React, { useState, useEffect, useLayoutEffect } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `Вы кликнули ${count} раз`;
    }, [count]);

    useLayoutEffect(() => {
        console.log('useLayoutEffect');
    }, [count]);

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={() => setCount(count + 1)}>
                Нажми на меня
            </button>
        </div>
    );
}

/*
    В этом примере мы используем хук useEffect, чтобы изменить заголовок страницы, когда пользователь кликает на кнопку.
    Мы передаем функцию, которая изменяет заголовок страницы и зависимость [count].
    Зависимость [count] указывает, что функция должна выполниться только при изменении count.

    Мы также используем хук useLayoutEffect, чтобы вывести сообщение в консоль.
    Он работает так же, как useEffect, но выполняется синхронно перед тем, как React обновит дерево компонентов.





    Использование хука useMemo
    Хук useMemo позволяет кэшировать вычисления, чтобы избежать их повторного выполнения при каждом рендере компонента.
 */

import React, { useMemo, useState } from 'react';

function Example() {
    const [a, setA] = useState(1);
    const [b, setB] = useState(2);

    const result = useMemo(() => {
        console.log('useMemo');
        return a + b;
    }, [a, b]);

    return (
        <div>
            <p>Результат: {result}</p>
            <button onClick={() => setA(a + 1)}>Увеличить a</button>
            <button onClick={() => setB(b + 1)}>Увеличить b</button>
        </div>
    );
}

/*
    В этом примере мы используем хук useMemo, чтобы кэшировать результат сложения a и b.
    Мы передаем функцию, которая выполняет вычисление и зависимость [a, b]. Таким образом,
    вычисление будет выполнено только при изменении a или b.
    Если a или b не изменились, хук useMemo вернет кэшированное значение, избежав повторного выполнения вычислений.




    Использование хука useCallback
    Хук useCallback позволяет кэшировать функции, чтобы избежать их создания при каждом рендере компонента.
 */


import React, { useState, useCallback } from 'react';

function Example() {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={handleClick}>
                Нажми на меня
            </button>
        </div>
    );
}

/*
    В этом примере мы используем хук useCallback, чтобы кэшировать функцию handleClick.
    Мы передаем функцию и зависимость [count]. Таким образом, функция будет создана только при изменении count.
    Если count не изменилось, хук useCallback вернет кэшированную функцию, избежав ее повторного создания.


    Хуки - это мощный инструмент для работы с React. Они позволяют избежать проблем,
    связанных с использованием классовых компонентов, таких как необходимость наследования, привязки контекста ....
 */


//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание


    Задача 1
    Создание компонента с использованием хуков
    Создайте компонент Counter, который будет выводить количество нажатий на кнопку.
    Используйте хук useState для хранения состояния счетчика.
*/

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p>Вы кликнули {count} раз(а)</p>
            <button onClick={handleClick}>
                Нажми на меня
            </button>
        </div>
    );
}

export default Counter;

/*
    В этом примере мы создали компонент Counter, который использует хук useState, чтобы хранить состояние счетчика count.
    Мы также создали функцию handleClick, которая увеличивает значение счетчика на 1 при каждом нажатии на кнопку.






    Задача 2
    Использование хука useEffect
    Создайте компонент Timer, который будет выводить текущее время и обновлять его каждую секунду.
    Используйте хук useState для хранения состояния времени и хук useEffect для обновления времени каждую секунду.
 */


import React, { useState, useEffect } from 'react';

function Timer() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Текущее время: {time.toLocaleTimeString()}</p>
        </div>
    );
}

export default Timer;

/*
    В этом примере мы создали компонент Timer, который использует хук useState, чтобы хранить текущее время в состоянии time.
    Мы также используем хук useEffect, чтобы обновлять время каждую секунду с помощью setInterval.
    Возвращаемая функция clearInterval вызывается, когда компонент размонтируется, чтобы предотвратить утечки памяти.
 */