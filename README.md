# Pizza ШИФТ
Проект написан при помощи таких web-технологий, как **HTML**, **CSS**, **JavaScript**, в качестве фреймворка использована популярная библиотека [React](https://react.dev/). 

Основной стек технологий:
* Сборщик приложения - [Vite](https://vitejs.dev/)
* Форматирование кода - [Prettier](https://prettier.io/)
* Линтер - [ESLint](https://eslint.org/)
* Стилизация - [CSS modules](https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/)
* Маршрутизация - [React Router Dom](https://reactrouter.com/en/main)
* Получение данных с сервера - [Fetch](https://learn.javascript.ru/fetch)
* State-manager - [Redux](https://redux.js.org/) + [React Redux](https://react-redux.js.org/) + [Redux Toolkit](https://redux-toolkit.js.org/)
* Обработка и валидация форм [React Hook Form](https://react-hook-form.com/)
* Создание масок ввода [Use Mask Input](https://www.npmjs.com/package/use-mask-input)

Этот проект реализует frontend часть web-приложения сайта с пиццами, данные для вывода берутся из [backend](https://shift-backend.onrender.com/api#/)-а, написанного ШИФТ.

___
На данный момент реализован почти весь функционал web-приложения:
* **Каталог** - на этой странице представлены пиццы, которые находятся в данных момент в продаже;
* **Модальное окно пиццы** - в нем представлена вся подробная информация по индивидуальной пицце, также можно добавить пиццу в корзину выбрав интересующие добавки;
* **Корзина** реализует функционал оформления заказа и состоит из трех страниц:
  * Страница с выбранными пиццами;
  * Страница для ввода персональных данных;
  * Страница ввода данных банковской карты;
* **Профиль** - страница, на которой можно просмотреть и редактировать данные пользователя, такие как ФИО, номер телефона, email, город;
* **Заказы** - состоит из двух страниц:
  * Страница с полным списком заказов конкретного пользователя;
  * Индивидуальная страница конкретного заказа, с возможностью отменить его, если он еще готовится.

Также релизуется возможность входа или выхода из своего аккаунта, вход осуществляется по номеру телефона и смс коду.
___
|Страница "Каталог"|Страница "Модальное окно пиццы"|
|:--------------:|:--------------:|
|![image](https://github.com/user-attachments/assets/ffe6290f-e0b4-44b5-b82f-89fe397a3198)|![image](https://github.com/user-attachments/assets/f01ecbe8-3a62-4d9b-9c22-ca5c49e02831)|
|**"Корзина", страница с выбранными пиццами**|**"Корзина", страница персональных данных**|
|![image](https://github.com/user-attachments/assets/e46a4a5b-2624-4ad8-9701-9617e4327a4c)|![image](https://github.com/user-attachments/assets/84bc042c-a865-4f06-bbed-7ae8aa000e97)|
|**"Корзина", страница банковской карты**|**Страница "Профиль"**|
|![image](https://github.com/user-attachments/assets/4d5efe5a-6bca-44fd-a65b-559137e0d8d7)|![image](https://github.com/user-attachments/assets/794a084e-4a79-4e98-a676-3bf41ae0b699)|
|**"Заказы", страница со списком товаров**|**"Заказы", страница конкретного заказа**|
|![image](https://github.com/user-attachments/assets/af0409c8-d96b-4547-8713-a9d6b9bcff18)|![image](https://github.com/user-attachments/assets/1f1dda4e-3569-4cc8-8154-45b389fb0b21)|
