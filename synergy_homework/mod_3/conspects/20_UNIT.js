/*
    Unit тестирование - это процесс тестирования отдельных единиц кода, таких как компоненты, функции и модули,
    с целью обнаружения ошибок и подтверждения правильности их работы.
    В React-приложениях, юнит-тесты обычно пишутся для компонентов, которые являются основным строительным блоком веб-интерфейса.



    Перед написанием тестов необходимо настроить среду для их запуска.
    Для этого необходимо установить несколько библиотек:

    Jest - это популярный фреймворк для тестирования JavaScript,
    который имеет встроенную поддержку тестирования React-компонентов.

    Enzyme - это библиотека, которая облегчает написание тестов для компонентов React,
    предоставляя API для манипуляции с DOM-деревом.

    Вы можете установить эти библиотеки с помощью npm:

    // npm install --save-dev jest enzyme enzyme-adapter-react-16


    После установки библиотек мы можем начать писать тесты.

    Примеры тестов

    Допустим, у нас есть компонент Button, который отображает кнопку на странице.
    Для начала, мы можем написать простой тест, который проверяет, что компонент отображает кнопку:
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('should render a button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('button')).toHaveLength(1);
    });
});


/*
    Этот тест использует метод shallow из Enzyme для рендеринга компонента Button виртуально, то есть без отображения на странице.
    Затем мы проверяем, что компонент отображает ровно одну кнопку.

    Далее, мы можем написать тест, который проверяет, что компонент принимает свойства label и onClick,
    и что кнопка отображает переданный label:
 */

import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('should render a button', () => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('button')).toHaveLength(1);
    });

    it('should accept label and onClick props', () => {
        const label = 'Click me!';
        const onClick = jest.fn();
        const wrapper = shallow(<Button label={label} onClick={onClick} />);
        expect(wrapper.instance().props.label).toEqual(label);
        expect(wrapper.instance().props.onClick).toEqual(onClick);
    });

    it('should display the label text', () => {
        const label = 'Click me!';
        const wrapper = shallow(<Button label={label} />);
        expect(wrapper.text()).toEqual(label);
    });

    it('should call onClick when the button is clicked', () => {
        const label = 'Click me!';
        const onClick = jest.fn();
        const wrapper = shallow(<Button label={label} onClick={onClick} />);
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});

/*

    Этот тест проверяет, что компонент Button принимает свойства label и onClick, и что кнопка отображает переданный label.
    Затем мы проверяем, что при клике на кнопку вызывается переданная функция onClick.


    Юнит-тестирование - это важный этап в разработке React-приложений.
    Тесты помогают обнаруживать ошибки и подтверждать правильность работы компонентов.

 */


//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
//____________________________________________________________________________________________________________________
/*
    домашнее задание


    Напишите тест для компонента React
*/

import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('renders a button with the correct label', () => {
        const label = 'Click me!';
        const wrapper = shallow(<Button label={label} />);
        expect(wrapper.find('button').text()).toBe(label);
    });

    it('calls onClick when the button is clicked', () => {
        const onClick = jest.fn();
        const wrapper = shallow(<Button onClick={onClick} />);
        wrapper.find('button').simulate('click');
        expect(onClick).toHaveBeenCalled();
    });
});

/*
    Этот тест использует библиотеку Enzyme для написания тестов для компонента Button.
    В первом тесте мы проверяем, что компонент отрисовывает кнопку с правильным лейблом,
    используя метод find и проверку значения текстового содержимого с помощью toBe.
    Во втором тесте мы проверяем, что компонент вызывает функцию onClick,
    когда на кнопку кликают, используя метод simulate для имитации клика и проверку, что onClick была вызвана,
    используя toHaveBeenCalled.
 */
