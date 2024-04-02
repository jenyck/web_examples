/*
    Основы работы с состоянием компонента

    Состояние компонента - это данные,
    которые могут изменяться в процессе работы компонента и влиять на его отображение.
    Для работы с состоянием в React используется функциональный компонент и хук useState.
    Например, рассмотрим компонент, отображающий счетчик:
 */

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <p>Вы кликнули {count} раз</p>
            <button onClick={() => setCount(count + 1)}>
                Кликнуть
            </button>
        </div>
    );
}

/*
    В этом компоненте мы объявляем переменную count и функцию setCount с помощью хука useState.
    Первый аргумент useState - это начальное значение состояния. В данном случае мы устанавливаем начальное значение 0.

    Затем мы выводим значение состояния count в элементе p, а также рендерим кнопку,
    при клике на которую вызывается функция setCount с новым значением count + 1.




    Обработка событий и изменение состояния
    Обработка событий в React происходит с помощью callback-функций, которые вызываются при возникновении определенных событий. Например, рассмотрим компонент, отображающий список элементов:
 */

import React, { useState } from 'react';

function List() {
    const [items, setItems] = useState(['apple', 'banana', 'cherry']);
    const [inputValue, setInputValue] = useState('');

    const handleChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setItems([...items, inputValue]);
        setInputValue('');
    };

    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <form onSubmit={handleSubmit}>
                <input type="text" value={inputValue} onChange={handleChange} />
                <button type="submit">Добавить</button>
            </form>
        </div>
    );
}

/*
    В этом компоненте мы объявляем переменную items и функцию setItems с помощью хука useState.
    Первый аргумент useState - это начальное значение состояния. В данном случае мы устанавливаем начальное значение ['apple', 'banana', 'cherry'].

    Затем мы объявляем переменную inputValue и функцию setInputValue с помощью хука useState.
    В данном случае мы устанавливаем начальное значение ''.

    Далее мы объявляем две callback-функции: handleChange и handleSubmit.
    Функция handleChange вызывается при изменении значения в поле ввода
    и устанавливает новое значение в переменную inputValue с помощью функции setInputValue.
    Функция handleSubmit вызывается при отправке формы и добавляет новый элемент в массив items с помощью функции setItems.
    При этом мы создаем новый массив, который состоит из старых элементов items и нового элемента, который мы получаем из переменной inputValue.

    Затем мы обнуляем значение в поле ввода, устанавливая пустую строку в переменную inputValue с помощью функции setInputValue.

    Возвращаемое значение компонента содержит список элементов, которые мы отображаем с помощью функции map.
    Каждый элемент списка имеет уникальный ключ key, который мы задаем с помощью параметра index.

    Наконец, мы рендерим форму для добавления новых элементов в список. При отправке формы вызывается функция handleSubmit.





    Работа с формами и обработка введенных пользователем данных
    Работа с формами в React включает в себя работу с состоянием и обработку событий.
    Для получения данных из формы используется объект event, который содержит информацию о событии.
    Например, рассмотрим компонент, отображающий форму для ввода имени пользователя и выводящий приветственное сообщение:
 */

import React, { useState } from 'react';

function Form() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Привет, ${name}!`);
        setName('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Введите ваше имя:
                <input type="text" value={name} onChange={handleChange} />
            </label>
            <button type="submit">Отправить</button>
        </form>
    );
}

/*
    В этом компоненте мы объявляем переменную name и функцию setName с помощью хука useState.
    Первый аргумент useState - это начальное значение состояния. В данном случае мы устанавливаем начальное значение ''.

    Затем мы объявляем callback-функцию handleChange, которая вызывается при изменении значения в поле ввода
    и устанавливает новое значение в переменную name с помощью функции setName.

    Далее мы объявляем callback-функцию handleSubmit, которая вызывается при отправке формы.
    В этой функции мы вызываем метод preventDefault объекта event,
    чтобы предотвратить стандартное поведение браузера при отправке формы (перезагрузка страницы).
    Затем мы выводим приветственное сообщение с помощью функции alert и обнуляем значение в поле ввода,
    устанавливая пустую строку в переменную name с помощью функции setName.

    Возвращаемое значение компонента содержит форму,
    в которой мы выводим поле ввода для имени пользователя и кнопку для отправки формы.
    При отправке формы вызывается функция handleSubmit, которая выводит приветственное сообщение.
 */

//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание

    Задача 1
    Создать компонент "Счетчик", который будет иметь кнопки "+" и "-",
    при нажатии на которые значение счетчика будет увеличиваться и уменьшаться соответственно.
    Значение счетчика должно отображаться на странице.
*/

import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

    return (
        <div>
            <button onClick={decrement}>-</button>
            <span>{count}</span>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;


/*
    В этом компоненте мы используем хук useState для создания переменной состояния count
    и функции setCount для ее изменения. Значение count и функции increment и decrement,
    которые изменяют значение count на 1 и -1 соответственно, передаются в JSX-разметку кнопок "+" и "-".
    Значение count отображается в span-элементе.

    Задача 2
    Создать компонент "Список задач",
    который будет позволять пользователю добавлять новые задачи в список и отмечать выполненные задачи.
    Каждая задача должна иметь свойство "название" и "выполнено". Задачи должны отображаться в виде списка на странице.
*/

import React, { useState } from 'react';

function TaskList() {
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    const addTask = () => {
        if (newTask.trim() === '') return;
        setTasks([...tasks, { title: newTask, done: false }]);
        setNewTask('');
    };

    const toggleTask = (index) => {
        setTasks([
            ...tasks.slice(0, index),
            { ...tasks[index], done: !tasks[index].done },
            ...tasks.slice(index + 1),
        ]);
    };

    const handleNewTaskChange = (event) => {
        setNewTask(event.target.value);
    };

    return (
        <div>
            <ul>
                {tasks.map((task, index) => (
                    <li
                        key={index}
                        style={{ textDecoration: task.done ? 'line-through' : 'none' }}
                        onClick={() => toggleTask(index)}
                    >
                        {task.title}
                    </li>
                ))}
            </ul>
            <div>
                <input type="text" value={newTask} onChange={handleNewTaskChange} />
                <button onClick={addTask}>Добавить задачу</button>
            </div>
        </div>
    );
}

export default TaskList;


/*
    В этом компоненте мы используемхук useState для создания переменных состояния tasks и newTask.
    tasks - это массив задач, каждая задача представлена объектом с полями title (название задачи) и done (флаг выполнения).
    newTask - это строка, которая будет использоваться для добавления новой задачи.

    В функции addTask мы проверяем, не пустая ли строка newTask, и если нет,
    добавляем новый объект задачи в массив tasks с помощью оператора расширения spread. Затем мы очищаем значение newTask.

    Функция toggleTask изменяет флаг выполнения задачи с определенным индексом в массиве tasks.
    Мы создаем новый массив задач с помощью оператора расширения spread, изменяем нужную задачу и заменяем старый массив на новый.

    Функция handleNewTaskChange просто обновляет значение newTask при изменении текста в поле ввода.

    В JSX-разметке мы используем метод массива map для отображения всех задач в виде списка.
    Для каждой задачи мы создаем элемент списка li, который может быть зачеркнут или нет в зависимости от значения флага done.
    Если пользователь щелкает по элементу списка, мы вызываем функцию toggleTask, чтобы изменить флаг выполнения задачи.

    Наконец, мы создаем форму для добавления новых задач.
    Пользователь может вводить новую задачу в поле ввода, а затем нажать кнопку "Добавить задачу", чтобы добавить ее в список.



    Задача 3
    Создать компонент "Форма заказа", который будет иметь поля "имя", "адрес" и "телефон".
    При отправке формы значения полей должны выводиться в консоль браузера.
*/


import React, { useState } from 'react';

function OrderForm() {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(`Имя: ${name}`);
        console.log(`Адрес: ${address}`);
        console.log(`Телефон: ${phone}`);
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Имя:</label>
                <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="address">Адрес:</label>
                <input
                    type="text"
                    id="address"
                    value={address}
                    onChange={(event) => setAddress(event.target.value)}
                />
            </div>
            <div>
                <label htmlFor="phone">Телефон:</label>
                <input
                    type="text"
                    id="phone"
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                />
            </div>
            <button type="submit">Отправить заказ</button>
        </form>
    );
}

export default OrderForm;

/*
    В этом компоненте мы используем хук useState для создания переменных состояния name, address и phone,
    которые соответствуют полям формы.

    Функция handleSubmit вызывается при отправке формы и выводит значения полей name,
    address и phone


    Функция handleSubmit принимает объект события в качестве аргумента,
    который используется для предотвращения отправки формы и перезагрузки страницы.
    Затем мы выводим значения всех полей формы, используя функцию console.log.

    В JSX-разметке мы создаем форму с тремя полями ввода: "Имя", "Адрес" и "Телефон".
    Значения полей хранятся в соответствующих переменных состояния, которые мы создали с помощью useState.
    Мы связываем значения полей со значениями переменных состояния и добавляем обработчики событий onChange
    для обновления переменных состояния при изменении полей ввода.

    Наконец, мы добавляем кнопку "Отправить заказ", которая вызывает функцию handleSubmit при отправке формы.

    Этот компонент может быть использован в качестве формы заказа для интернет-магазина или любого другого веб-приложения,
    где пользователь должен ввести свои данные для отправки заказа или запроса.
    Он демонстрирует основные концепции работы с формами и состоянием компонента в React.
 */