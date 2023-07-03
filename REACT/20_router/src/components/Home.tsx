import React from 'react';
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <header>
                <ul>
                    <li>
                      {/* обёртка над тэгом <a>, в атрибуте to прописываем адрес, при переходе на который отобразится другая страница */}
                      <Link to="/">Главная</Link>
                    </li>
                    <li>
                      <Link to="/about">Контакты</Link>
                    </li>
                    <li>
                      <Link to="/users">Пользователи</Link>
                    </li>
                </ul>
            </header>
    );
}

export default Home;