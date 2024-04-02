/*
    Введение в React JS
    React - это JavaScript библиотека для создания пользовательских интерфейсов.
    React разработан Facebook и используется для создания масштабируемых веб-приложений с динамическими интерфейсами.
    Он позволяет разработчикам создавать модульные компоненты,
    которые могут быть многократно использованы и легко поддерживаться.
    React использует виртуальный DOM, который улучшает производительность приложения,
    позволяя избежать ненужных изменений на странице.

    React можно использовать с другими библиотеками и фреймворками, такими как Redux,
    React Router, Next.js и Gatsby. Он также позволяет создавать мобильные приложения с помощью React Native.

    Основные принципы React
    React работает на основе компонентов.
    Компоненты - это небольшие модули, которые объединяют в себе HTML, CSS и JavaScript.
    Каждый компонент может иметь свой собственный состояние и методы.
    Он может использоваться многократно в приложении.

    В React используется виртуальный DOM, который является копией реального DOM.
    Виртуальный DOM обновляет только те элементы, которые действительно должны быть обновлены,
    что улучшает производительность приложения.

    JSX - это расширение синтаксиса JavaScript, которое позволяет создавать элементы React.
    JSX выглядит как HTML, но на самом деле является JavaScript.
    JSX позволяет легко создавать компоненты и управлять ими.

    Создание и рендеринг компонентов в React
    Для создания компонента в React используется функция или класс.
    Функциональные компоненты - это простые функции, которые принимают пропсы и возвращают элементы React.
    Классовые компоненты - это классы, которые наследуются от React.Component и имеют метод render.

    Пример функционального компонента:
 */

function Greeting(props) {
    return <h1>Hello, {props.name}!</h1>;
}

const element = <Greeting name="John" />;
ReactDOM.render(element, document.getElementById("root"));

/*
    В этом примере создается компонент Greeting,
    который принимает пропс name и возвращает элемент h1 с текстом Hello, {props.name}!.
    Затем создается элемент element, который передается в функцию ReactDOM.render() вместе с root - элементом DOM,
    в который должен быть помещен компонент.

    Пример классового компонента:
 */

class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

const element2 = <Greeting name="John" />;
ReactDOM.render(element2, document.getElementById("root"));

/*
    Этот компонент также выводит текст "Hello, {this.props.name}!" на страницу.
    Он определен как класс, который наследуется от React.Component, и имеет метод render(),
    который возвращает элемент h1.

    Оба компонента можно использовать в других компонентах, передавая им различные пропсы.

    Например:
 */

function App() {
    return (
        <div>
            <Greeting name="John" />
            <Greeting name="Jane" />
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

/*
    Этот пример создает компонент App, который содержит два компонента Greeting с различными именами.
    Обратите внимание на то, что компоненты Greeting используются в JSX синтаксисе, как обычные HTML элементы.
 */

//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание

    Задача 1: Создание компонента
    Создайте компонент MyComponent, который выводит на страницу "Hello, World!".
    Разместите его на странице при помощи ReactDOM.render().
*/

class MyComponent extends React.Component {
    render() {
        return <h1>Hello, World!</h1>;
    }
}

ReactDOM.render(<MyComponent />, document.getElementById("root"));

/*
    Компонент MyComponent просто выводит текст "Hello, World!" в элементе h1.
    Функция ReactDOM.render() используется для размещения компонента на странице.

    Задача 2: Использование пропсов
    Создайте компонент Greeting, который принимает пропс name и выводит на страницу "Hello, {name}!".
    Разместите два экземпляра этого компонента на странице: первый с именем "John", а второй - с именем "Jane".
*/

class Greeting extends React.Component {
    render() {
        return <h1>Hello, {this.props.name}!</h1>;
    }
}

ReactDOM.render(
    <div>
        <Greeting name="John" />
        <Greeting name="Jane" />
    </div>,
    document.getElementById("root")
);

/*
    Компонент Greeting принимает пропс name и выводит текст "Hello, {name}!" в элементе h1.
    Два экземпляра этого компонента размещаются внутри элемента div при помощи JSX-синтаксиса.

    Задача 3: Использование состояния
    Создайте компонент Counter, который выводит на страницу текущее значение счетчика.
    Добавьте две кнопки: "Increment" и "Decrement", которые будут увеличивать или уменьшать значение счетчика на 1.
*/

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount() {
        this.setState({ count: this.state.count + 1 });
    }

    decrementCount() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => this.incrementCount()}>Increment</button>
                <button onClick={() => this.decrementCount()}>Decrement</button>
            </div>
        );
    }
}

ReactDOM.render(<Counter />, document.getElementById("root"));

/*

    Компонент Counter использует состояние, чтобы отслеживать текущее значение счетчика.
    Конструктор компонента устанавливает начальное значение состояния равным 0.
    Два метода incrementCount() и decrementCount() обновляют состояние на 1 и -1 соответственно.
    Метод render() выводит текущее значение счетчика и две кнопки для увеличения или уменьшения его значения.


    Задача 4: Использование условных операторов
    Создайте компонент Temperature, который принимает пропс temperature и выводит на страницу текст "It's cold" е
    сли температура меньше 0, и "It's hot" если температура больше или равна 0.
*/

class Temperature extends React.Component {
    render() {
        if (this.props.temperature < 0) {
            return <h1>It's cold</h1>;
        } else {
            return <h1>It's hot</h1>;
        }
    }
}

ReactDOM.render(<Temperature temperature={-10} />, document.getElementById("root"));

/*
    Компонент Temperature принимает пропс temperature и выводит текст "It's cold" если температура меньше 0,
    и "It's hot" если температура больше или равна 0.
    В этом примере компонент размещается на странице с температурой -10.

    Задача 5: Использование списков
    Создайте компонент List, который принимает пропс items - массив строк,
    и выводит каждый элемент этого массива в виде отдельного элемента списка на странице.
*/

class List extends React.Component {
    render() {
        const items = this.props.items.map((item) => <li>{item}</li>);
        return <ul>{items}</ul>;
    }
}

const items = ["Pine-Apple", "Banana", "Orange"];

ReactDOM.render(<List items={items} />, document.getElementById("root"));

/*
    Компонент List принимает пропс items - массив строк,
    и выводит каждый элемент этого массива в виде отдельного элемента списка на странице.
    Метод map() используется для создания массива элементов <li>,
    а затем выводится внутри элемента <ul>.
    В этом примере компонент размещается на странице с массивом строк ['Apple', 'Banana', 'Orange'].
 */
