/* eslint-disable no-undef */
Feature('Liking Restaurant');

Before((I) => {
    I.amOnPage('#/favorite');
});

Scenario('Showing empty info of the favorite container', (I) => {
    I.seeElement('.no-favorite');
    I.see('No Favorite Restaurant Yet', '.no-favorite');
});

Scenario('Liking A Restaurant', async (I) => {
    I.see('No Favorite Restaurant Yet', '.no-favorite');

    I.amOnPage('/');

    I.seeElement('.card-info h2 a');
    const firstRestaurantName = locate('.card-info h2 a').first();
    const restaurantName = await I.grabTextFrom(firstRestaurantName);
    I.click(restaurantName);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('#/favorite');
    I.see(`${restaurantName}`, '.card');
});

Scenario('Unliking previous Restaurant', async (I) => {
    I.see('No Favorite Restaurant Yet', '.no-favorite');

    I.amOnPage('/');

    // Like Terlebih dahulu restaurant item pertama
    I.seeElement('.card-info h2 a');
    const firstRestaurantName = locate('.card-info h2 a').first();
    const restaurantName = await I.grabTextFrom(firstRestaurantName);
    I.click(restaurantName);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    // Cek kembali halaman Favorite
    I.amOnPage('#/favorite');
    I.see(`${restaurantName}`, '.card');
    const LikedRestaurant = locate('.card-info h2 a').first();
    const LikedRestaurantName = await I.grabTextFrom(LikedRestaurant);

    // Click card dan kita akan menuju ke halaman detail
    I.click(LikedRestaurantName);
    I.seeElement('[aria-label="unlike this restaurant"]');
    I.click('[aria-label="unlike this restaurant"]');

    // Kembali lagi kehalaman favorite
    I.amOnPage('#/favorite');
    I.see('No Favorite Restaurant Yet', '.no-favorite');
});

Scenario('Comment on the restaurant detail page', async (I) => {
    I.see('No Favorite Restaurant Yet', '.no-favorite');

    I.amOnPage('/');

    I.seeElement('.card-info h2 a');
    const GetfirstRestaurantName = locate('.card-info h2 a').first();
    const restaurantName = await I.grabTextFrom(GetfirstRestaurantName);
    I.click(restaurantName);

    // Isi input name dan review
    const nameTest = 'Name from codecept hehehe';
    const reviewTest = 'Review dari codecept';

    I.seeElement('input#name');
    I.fillField('input#name', nameTest);
    I.seeElement('input#review');
    I.fillField('input#review', reviewTest);

    I.pressKey('Enter');
    I.see(nameTest, '.user');
    I.see(reviewTest, '.review');
});
