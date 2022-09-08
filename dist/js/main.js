import menu from './modules/menu';
import progress from './modules/_progress-bar';

window.addEventListener('DOMContentLoaded' , () => {
    menu('.hamburger', '.menu__close', '.menu', 'active');
    progress();
})