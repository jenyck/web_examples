/*
    Создание и использование маршрутов в React
    Маршрутизация - это процесс определения, какой компонент отображается на экране в зависимости от текущего URL-адреса.
    В React мы можем использовать различные способы для создания и использования маршрутов,
    но самым популярным способом является использование библиотеки React Router.

    Для начала работы с React Router нам необходимо установить ее с помощью npm:
    // npm install react-router-dom


    Далее мы можем определить маршруты в нашем приложении.
    Для этого мы создадим компонент App,
    в котором определим маршруты с помощью компонента Switch из библиотеки react-router-dom.
    Switch обеспечивает выбор первого совпадающего маршрута и отображает соответствующий компонент.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;

/*
    В этом примере мы определили три маршрута: '/', '/about' и '*'.
    Когда пользователь открывает приложение и URL-адрес соответствует '/', будет отображаться компонент Home.
    Если пользователь переходит на страницу '/about', отображается компонент About.
    Если URL-адрес не соответствует ни одному из определенных маршрутов, отображается компонент NotFound.




    Работа с параметрами маршрута и передача данных между компонентами
    В React Router мы можем использовать параметры маршрута для передачи данных между компонентами.
    Например, мы можем определить маршрут '/users/:id',
    чтобы отображать информацию о пользователе с определенным идентификатором.

    Когда пользователь переходит по маршруту '/users/:id',
    мы можем получить значение параметра id из объекта match.params и передать его в компонент User.
 */


import React from 'react';
import { useParams } from 'react-router-dom';

function User() {
    const { id } = useParams();

    return (
        <div>
            <h1>User {id}</h1>
            {/* Дополнительный код для отображения информации о пользователе */}
        </div>
    );
}

export default User;


/*
    В этом примере мы использовали хук useParams из библиотеки react-router-dom
    для получения значения параметра id из текущего URL-адреса.
    Затем мы можем использовать это значение в компоненте для отображения информации о пользователе с определенным идентификатором.





    Использование библиотеки React Router для упрощения маршрутизации
    Библиотека React Router предоставляет множество возможностей для упрощения маршрутизации в React.
    Например, мы можем использовать компонент Link для создания ссылок на другие страницы в нашем приложении.
 */


import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Home</h1>
            <p>Welcome to my app!</p>
            <Link to="/about">About</Link>
        </div>
    );
}

export default Home;

/*
    Когда пользователь нажимает на ссылку,
    библиотека React Router обновляет URL-адрес и отображает соответствующий компонент.

    Кроме того, мы можем использовать компонент NavLink для создания навигационных ссылок,
    которые автоматически получают класс active при соответствии текущего URL-адреса.
 */

import React from 'react';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;

/*
    В этом примере мы использовали компонент NavLink и передали ему свойство exact,
    чтобы он стал активным только при точном соответствии текущего URL-адреса.
    Мы также можем передавать другие свойства, такие как activeClassName и activeStyle, для определения стилей активной ссылки.

    В целом, библиотека React Router предоставляет множество инструментов для создания и управления маршрутами в нашем приложении React.
    Она позволяет нам легко добавлять маршруты, передавать параметры, обрабатывать ошибки и многое другое.

    Например, мы можем использовать компонент Switch для отображения только одного маршрута,
    который соответствует текущему URL-адресу. Это может быть полезно, если у нас есть несколько маршрутов,
    которые могут соответствовать одному и тому же URL-адресу.
 */


import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import NotFound from './NotFound';

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;

/*
    В этом примере мы использовали компонент Switch для обертывания наших маршрутов и передали им свойства path и component,
    чтобы указать соответствующий маршрут и компонент для каждого URL-адреса. Мы также добавили маршрут NotFound,
    который будет отображаться в случае, если пользователь введет несуществующий URL-адрес.

    Кроме того, библиотека React Router позволяет нам создавать вложенные маршруты,
    которые могут иметь собственные параметры и обрабатывать свои события.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/users/:id" component={User} />
                <Route component={NotFound} />
            </Switch>
        </div>
    );
}

export default App;

/*
    В этом примере мы добавили компонент Navbar, который содержит ссылки на различные страницы в нашем приложении.
    Мы также добавили маршрут '/users/:id', который будет отображать информацию о пользователе с определенным идентификатором.
    Когда пользователь переходит по этому маршруту,
    мы можем получить значение параметра id из объекта match.params и передать его в компонент User.

    В целом, библиотека React Router является мощным инструментом для управления маршрутизацией и навигацией в приложениях React.
    Она позволяет нам создавать гибкие и динамические маршруты, передавать параметры, обрабатывать ошибки и многое другое.
    Однако, помимо библиотеки React Router, существуют и другие инструменты для работы с маршрутизацией в React,
    такие как Reach Router, Next.js и другие.

    Например, библиотека Reach Router предоставляет более простой API для создания маршрутов, чем React Router.
    В ней маршруты определяются как обычные компоненты, а параметры маршрута передаются через свойства компонента.
    Кроме того, Reach Router имеет встроенную поддержку анимации переходов между страницами.
 */

import React from 'react';
import { Router, Link } from '@reach/router';

import Home from './Home';
import About from './About';
import Contact from './Contact';
import User from './User';

function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>{' '}
                <Link to="/about">About</Link>{' '}
                <Link to="/contact">Contact</Link>{' '}
            </nav>

            <Router>
                <Home path="/" />
                <About path="/about" />
                <Contact path="/contact" />
                <User path="/users/:id" />
            </Router>
        </div>
    );
}

export default App;
/*
    В этом примере мы использовали библиотеку Reach Router для создания маршрутов в нашем приложении.
    Мы определили компоненты Home, About, Contact и User, которые соответствуют соответствующим маршрутам,
    и передали им параметры маршрута через свойства компонента.
    Мы также использовали компонент Link для создания ссылок на каждый маршрут.
 */



//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание


    Задача
    создать простое приложение React, которое будет иметь несколько маршрутов и возможность передавать параметры в URL.
    В частности, вам нужно:

    1 Создать компонент Home, который будет отображаться на маршруте / и содержать информацию о приложении.
    2 Создать компонент About, который будет отображаться на маршруте /about и содержать информацию о приложении.
    3 Создать компонент Contact, который будет отображаться на маршруте /contact и содержать форму обратной связи.
    4 Создать компонент User, который будет отображаться на маршруте /user/:id, где :id - это параметр маршрута,
    который будет содержать идентификатор пользователя.
    Этот компонент должен получать и отображать информацию о пользователе с соответствующим идентификатором.
    5 Добавить навигационную панель с ссылками на каждый маршрут.





    Решение:

    Для начала создадим новый проект React с помощью Create React App. Откройте терминал и выполните следующую команду:
    npx create-react-app routing-app

    После завершения установки перейдите в директорию проекта

    Теперь нам нужно установить библиотеку React Router для управления маршрутами в нашем приложении.
    Откройте терминал и выполните следующую команду
    npm install react-router-dom


    Создадим четыре компонента: Home, About, Contact и User. Каждый из них будет отображаться на соответствующем маршруте.

    Создание компонента Home
    Создадим файл Home.js в папке components и опишем компонент Home:
*/

import React from 'react';

const Home = () => {
    return (
        <div>
            <h2>Добро пожаловать на домашнюю страницу</h2>
            <p>Это пример приложения React с маршрутизацией</p>
        </div>
    );
};

export default Home;

/*
    Компонент Home просто выводит на экран заголовок и описание.

    Создание компонента About
    Создадим файл About.js в папке components и опишем компонент About:
 */

import React from 'react';

const About = () => {
    return (
        <div>
            <h2>О нас</h2>
            <p>Мы компания, занимающаяся разработкой веб-приложений.</p>
        </div>
    );
};

export default About;

/*
    Компонент About также просто выводит на экран заголовок и описание.

    Создание компонента Contact
    Создадим файл Contact.js в папке components и опишем компонент Contact:
 */

import React from 'react';

const Contact = () => {
    return (
        <div>
            <h2>Контакты</h2>
            <p>Наш адрес: г. Москва, ул. Пушкина, д.10, кв.5</p>
            <p>Наш телефон: +7 (495) 123-45-67</p>
        </div>
    );
};

export default Contact;


/*
    Компонент Contact выводит на экран заголовок и контактную информацию.

    Создание компонента User
    Создадим файл User.js в папке components и опишем компонент User:
 */

import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
    const { id } = useParams();

    return (
        <div>
            <h2>Информация о пользователе {id}</h2>
            <p>Здесь будет информация о пользователе с ID {id}</p>
        </div>
    );
};

export default User;

/*
    Компонент User использует хук useParams() для получения ID пользователя из параметров маршрута
    и выводит на экран заголовок и информацию о пользователе.

    Это все, что нам нужно для создания компонентов. Теперь мы можем перейти к следующему шагу - настройке маршрутизации.


    Теперь, когда мы создали компоненты, мы можем настроить маршруты с помощью библиотеки React Router.
    Для этого мы импортируем компоненты, которые мы хотим использовать,
    а затем определяем соответствующие маршруты внутри компонента Router.

    Давайте создадим файл Routes.js, который будет содержать настройки маршрутов:
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import User from './components/User';

const Routes = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/user/:id" component={User} />
        </Switch>
    );
};

export default Routes;

/*
    Здесь мы импортируем компоненты Home, About, Contact и User, а затем определяем маршруты с помощью компонента Switch.
    Компонент Switch используется для отображения только одного маршрута за раз.
    Затем мы определяем каждый маршрут с помощью компонента Route.

    Первый маршрут определен с помощью exact path="/", что означает, что этот маршрут будет соответствовать только точному пути /.
    Второй, третий и четвертый маршруты соответствуют путям /about, /contact и /user/:id соответственно.

    Обратите внимание, что в четвертом маршруте мы используем параметр :id.
    Этот параметр будет использоваться для передачи идентификатора пользователя в компонент User. Мы будем использовать этот параметр в следующем шаге.

    Теперь мы можем импортировать компонент Routes в главный компонент App и отобразить его:
 */

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Routes from './Routes';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes />
            </div>
        </Router>
    );
}

export default App;

/*
    Здесь мы импортируем компоненты Navbar и Routes и отображаем их внутри компонента Router.

    Теперь наше приложение должно работать с маршрутизацией и навигацией. Если вы запустите приложение,
    вы должны увидеть три ссылки в верхней части экрана: "Home", "About" и "Contact".
    Когда вы нажимаете на каждую ссылку, соответствующий компонент должен отображаться в основной области приложения.
    Кроме того, мы также добавили возможность передавать параметры в маршруты и использовать их для отображения
    дополнительной информации в компонентах.
    Все это было возможно благодаря использованию библиотеки React Router,
    которая значительно упрощает работу с маршрутизацией и навигацией в наших приложениях React.
 */