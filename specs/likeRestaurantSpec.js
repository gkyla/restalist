/* eslint-disable import/prefer-default-export */
/* eslint-disable no-undef */

import RestalistDb from '../src/scripts/data/restalist-idb';
import * as testFactoriesHelper from './helper/testFactoriesHelper';

describe('Liking a Restaurant', () => {
    const likeButtonContainer = () => {
        document.body.innerHTML = '<div class="like-container"></div>';
    };

    beforeEach(() => {
        likeButtonContainer();
    });

    //  Positive Case

    it('Should display the like button when the restaurant has not been liked by user', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="like this restaurant"]')).toBeTruthy();
    });

    it('Should be able to like the restaurant ', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        const restaurant = await RestalistDb.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        RestalistDb.deleteRestaurant(1);
    });

    // Negative Case

    it('Should not display unlike button when the restaurant has not been liked by user', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this restaurant"]')).toBeFalsy();
    });

    it('Should not add restaurant again when its already liked', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({ id: 1 });

        await RestalistDb.putRestaurant({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await RestalistDb.getAllRestaurant()).toEqual([{ id: 1 }]);

        RestalistDb.deleteRestaurant(1);
    });

    it('should not add a restaurant when it has no id', async () => {
        await testFactoriesHelper.CreateLikeButtonPresenterRestaurant({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        expect(await RestalistDb.getAllRestaurant()).toEqual([]);
    });

    it('Should not display button when there is no presenter', async () => {
        expect(document.querySelector('#likeButton')).toBeFalsy();
    });
});
