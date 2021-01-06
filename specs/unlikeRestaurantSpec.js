/* eslint-disable no-undef */
import RestalistDb from '../src/scripts/data/restalist-idb';
import * as testFactoriesHelper from './helper/testFactoriesHelper';

describe('Unliking A Restaurant', () => {
    const likeButtonContaier = () => {
        document.body.innerHTML = '<div class="like-container"></div>';
    };

    beforeEach(async () => {
        likeButtonContaier();
        await RestalistDb.putRestaurant({ id: 1 });
    });

    afterEach(async () => {
        await RestalistDb.deleteRestaurant(1);
    });

    // Positive Case

    it('Should display unlike button when the restaurant has been liked', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeTruthy();
    });

    it('should be able to remove liked restaurant from the list', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await RestalistDb.getAllRestaurant()).toEqual([]);
    });

    // Negative Case

    it('should not display like button when the restaurant has been liked', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeFalsy();
    });

    it('should not throw error if the unliked restaurant is not in the list', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        await RestalistDb.deleteRestaurant(1);

        document.querySelector('[aria-label="unlike this restaurant"]').dispatchEvent(new Event('click'));

        expect(await RestalistDb.getAllRestaurant()).toEqual([]);
    });
});
