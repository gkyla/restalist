/* eslint-disable class-methods-use-this */
/* eslint-disable no-undef */

const { default: restalistSourceData } = require('../src/scripts/data/restaurant-data');
const {
    createRestaurantList, createRestaurantListItem, createRestaurantWeek, createRestaurantWeekItem,
} = require('../src/scripts/views/templates/template-creator');

describe('Home Restalist', () => {
    // Positive case
    it('Should display skeleton on the Best Restaurant This Week', () => {
        document.body.innerHTML = createRestaurantWeek();
        expect(document.querySelector('.skeleton')).toBeTruthy();
    });

    it('Should display skeleton on the Restaurant list', () => {
        document.body.innerHTML = createRestaurantList();
        expect(document.querySelector('.skeleton')).toBeTruthy();
    });

    it('Should load the restaurant list', async () => {
        document.body.innerHTML = createRestaurantList();
        const restaurants = await restalistSourceData.restaurantList();
        const gridList = document.querySelector('.grid-list');
        restaurants.forEach((restaurant) => {
            gridList.innerHTML += createRestaurantListItem(restaurant);
        });

        // Cek card gambar (skeleton tidak ada element gambar)
        expect(document.querySelector('.card-preview img')).toBeTruthy();
        expect(document.querySelector('.skeleton')).toBeFalsy();
    });

    it('Should load the best-week section', async () => {
        document.body.innerHTML = createRestaurantWeek();
        const gridWeek = document.querySelector('.grid-week');
        const restaurants = await restalistSourceData.restaurantFilterBestWeek();
        const filteredRating = restaurants.filter((restaurant) => restaurant.rating >= 4.6);
        gridWeek.innerHTML = createRestaurantWeekItem(filteredRating);

        // Cek Box gambar (skeleton tidak ada element gambar)
        expect(document.querySelector('.box img')).toBeTruthy();
        expect(document.querySelector('.skeleton')).toBeFalsy();
    });

    // Negative case

    it('Should not display skeleton on the Restaurant List section when the data finished loading', async () => {
        document.body.innerHTML = createRestaurantList();
        await restalistSourceData.restaurantList();

        expect(document.querySelector('.skeleton')).toBeFalsy();
    });

    it('Should not display skeleton on the Best Restaurant This Week section when the data finished loading', async () => {
        document.body.innerHTML = createRestaurantWeek();

        await restalistSourceData.restaurantFilterBestWeek();

        expect(document.querySelector('.skeleton')).toBeFalsy();
    });
});
