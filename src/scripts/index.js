import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/mobile.css';

// Default Component
import './views/component/navbar';
import './views/component/jumbotron';
import './views/component/footer';

import './utils/modernizr-custom';
import App from './views/app';
import './utils/register-sw';
import jumpToMainContent from './utils/skip-content';

const app = new App({
    button: document.querySelector('.menu'),
    drawer: document.querySelector('.nav-links'),
    content: document.querySelector('#main-content'),
});

window.addEventListener('hashchange', () => {
    app.renderPage();
});

window.addEventListener('load', () => {
    app.renderPage();

    const skipToContent = document.querySelector('.skip');
    skipToContent.addEventListener('click', jumpToMainContent);
});
