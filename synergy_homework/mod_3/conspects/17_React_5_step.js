/*
    Что такое API?
    API (Application Programming Interface) - это интерфейс, который позволяет взаимодействовать с другим приложением или сервисом.
    Обычно API используется для обмена данными между клиентской и серверной сторонами приложения.

    Что такое HTTP запрос?
    HTTP запрос - это запрос, который отправляется клиентом (например, браузером) к серверу для получения информации.
    HTTP запрос может быть сделан в различных форматах, таких как GET, POST, PUT, DELETE.

    Как работать с API и асинхронными запросами в React?
    ВReact для работы с API и асинхронными запросами можно использовать стандартные методы JavaScript, такие как fetch или axios.
    Кроме того, можно использовать библиотеки для упрощения этого процесса, такие как redux-thunk, redux-saga или react-query.

    Основы работы с API и HTTP запросами
    Для начала, нужно импортировать библиотеку для отправки HTTP запросов. В примерах ниже мы будем использовать axios.
 */

import axios from 'axios';

// После этого можно создать функцию, которая будет отправлять запрос на сервер.

const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    return response.data;
}

/*
    В этом примере мы используем метод GET для получения данных с сервера.
    После отправки запроса мы ждем ответа и возвращаем полученные данные.




    Создание и отправка запросов на сервер
    Чтобы отправить запрос на сервер, нужно вызвать созданную ранее функцию.
 */

fetchData()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    });

/*
    В этом примере мы вызываем функцию fetchData и ждем ответа.
    Если запрос выполнен успешно, мы получим данные и выведем их в консоль.
    Если запрос вернет ошибку, мы выведем сообщение об ошибке.




    Обработка ответов от сервера и обновление состояния компонентов
    После получения данных с сервера, мы можем использовать их для обновления состояния компонентов.
 */

class Users extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoading: false,
            error: null,
        };
    }

    componentDidMount() {
        this.setState({ isLoading: true });
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then((response) => {
                this.setState({ isLoading: false, users: response.data });
            })
            .catch((error) => {
                this.setState({ isLoading: false, error: error });
            });
    }

    render() {
        const { users, isLoading, error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name}</li>
                ))}
            </ul>
        );
    }
}

export default Users;

/*

    В этом примере мы создаем классовый компонент Users,
    который получает данные с сервера и обновляет свое состояние в соответствии с полученными данными.

    В методе componentDidMount мы устанавливаем флаг isLoading в true и отправляем запрос на сервер.
    После получения данных мы устанавливаем isLoading в false и обновляем список пользователей в состоянии компонента.

    В методе render мы проверяем флаги isLoading и error и отображаем соответствующее сообщение в зависимости от значения этих флагов.
    Если данные успешно получены, мы выводим список пользователей.
 */

//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание


    Для выполнения заданий мы будем использовать библиотеку Axios для отправки HTTP запросов,
    а также React-компоненты для отображения данных и обработки событий.

    Задача 1: Создать компонент, который получает список задач с сервера и выводит их на страницу.





    создаим компонент TaskList, который будет получать список задач с сервера и выводить их на страницу.
*/

import React, { Component } from "react";
import axios from "axios";

class TaskList extends Component {
    state = {
        tasks: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                this.setState({ tasks: response.data, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error: error, isLoading: false });
            });
    }

    render() {
        const { tasks, isLoading, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>{task.title}</li>
                ))}
            </ul>
        );
    }
}

export default TaskList;

/*
    В этом компоненте мы используем метод componentDidMount для отправки запроса на сервер и получения списка задач.
    После получения данных мы обновляем состояние компонента и выводим список задач на страницу.

    Задача 2: Создать форму, которая позволяет добавлять новые задачи на сервер.






    Для реализации формы добавления новых задач мы создадим новый компонент TaskForm.

*/

import React, { Component } from "react";
import axios from "axios";

class TaskForm extends Component {
    state = {
        title: "",
        isLoading: false,
        error: null,
    };

    handleInputChange = (event) => {
        this.setState({ title: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();

        const { title } = this.state;

        this.setState({ isLoading: true });

        axios
            .post("https://jsonplaceholder.typicode.com/todos", { title: title })
            .then((response) => {
                this.setState({ isLoading: false, title: "" });
            })
            .catch((error) => {
                this.setState({ error: error, isLoading: false });
            });
    };

    render() {
        const { title, isLoading, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={this.handleInputChange} />
                </label>
                <button type="submit" disabled={isLoading}>
                    {isLoading ? "Adding..." : "Add Task"}
                </button>
            </form>
        );
    }
}

export default TaskForm;

/*
    В этом компоненте мы создаем форму с полем для ввода заголовка задачи и кнопкой для добавления новой задачи.
    При отправке формы мы отправляем POST-запрос на сервер и обновляем состояние компонента.




    Задача 3: Добавить возможность удаления задач на сервере.




    Для реализации удаления задач мы добавим новый метод в компонент TaskList и создадим компонент TaskItem,
    который будет отображать каждую задачу и позволять ее удалить.



 */

import React, { Component } from "react";
import axios from "axios";

class TaskList extends Component {
    state = {
        tasks: [],
        isLoading: false,
        error: null,
    };

    componentDidMount() {
        this.setState({ isLoading: true });

        axios
            .get("https://jsonplaceholder.typicode.com/todos")
            .then((response) => {
                this.setState({ tasks: response.data, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error: error, isLoading: false });
            });
    }

    handleDelete = (taskId) => {
        this.setState({ isLoading: true });

        axios
            .delete(`https://jsonplaceholder.typicode.com/todos/${taskId}`)
            .then((response) => {
                const tasks = this.state.tasks.filter((task) => task.id !== taskId);
                this.setState({ tasks: tasks, isLoading: false });
            })
            .catch((error) => {
                this.setState({ error: error, isLoading: false });
            });
    };

    render() {
        const { tasks, isLoading, error } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        }

        if (isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <ul>
                {tasks.map((task) => (
                    <TaskItem key={task.id} task={task} onDelete={this.handleDelete} />
                ))}
            </ul>
        );
    }
}

class TaskItem extends Component {
    handleDelete = () => {
        const { task, onDelete } = this.props;
        onDelete(task.id);
    };

    render() {
        const { task } = this.props;

        return (
            <li>
                {task.title} <button onClick={this.handleDelete}>Delete</button>
            </li>
        );
    }
}

export default TaskList;


/*
    В компоненте TaskList мы добавляем новый метод handleDelete, который отправляет DELETE-запрос на сервер для удаления задачи.
    Мы также создаем новый компонент TaskItem, который отображает каждую задачу и позволяет ее удалить.

    Компонент TaskItem принимает два пропа: task и onDelete.
    При клике на кнопку удаления мы вызываем метод onDelete с id задачи,
    который затем используется для отправки DELETE-запроса на сервер.
    Компонент TaskList передает проп onDelete в компонент TaskItem,
    чтобы установить обработчик удаления задачи.
 */