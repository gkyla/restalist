/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
if ('serviceWorker' in navigator) {
    self.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js')
            .then(() => {
                console.log('ServiceWorker has been successfully registered');
            })
            .catch(() => {
                console.error('ServiceWorker was not registered successfully');
            });
    });
} else {
    console.error('Browser not supported ServiceWorker, please update your Browser !');
}
