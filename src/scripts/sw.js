/* eslint-disable no-console */
/* eslint-disable no-restricted-globals */
import 'regenerator-runtime';
import { precacheAndRoute } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { skipWaiting, clientsClaim } from 'workbox-core';
import { StaleWhileRevalidate } from 'workbox-strategies';

skipWaiting();
clientsClaim();

precacheAndRoute(self.__WB_MANIFEST, {
    ignoreURLParametersMatching: [/.*/],
});

precacheAndRoute([
    { url: '/manifest.json', revision: null },
    { url: '/icons/icon_192x192.png', revision: null },
    { url: '/images/logo.webp', revision: null },
    { url: '/images/logo-small.webp', revision: null },
]);

registerRoute(
    ({ url }) => url.origin === 'https://restaurant-api.dicoding.dev',
    new StaleWhileRevalidate({
        cacheName: 'data-cache',
    }),
);

registerRoute(
    ({ url }) => url.origin === 'https://fonts.googleapis.com' || url.origin === 'https://fonts.gstatic.com',
    new StaleWhileRevalidate({
        cacheName: 'font-caches',
    }),
);
