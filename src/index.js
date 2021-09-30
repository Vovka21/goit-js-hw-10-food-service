import './sass/main.scss';
import './styles.css';
import menu from './menu.json';
import items from './templates/menu-card.hbs';
import './localstorage';

const ul = document.querySelector('.js-menu');

const markup = items(menu);
ul.insertAdjacentHTML('beforeend', markup);
