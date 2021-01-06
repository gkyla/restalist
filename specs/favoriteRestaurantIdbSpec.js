/* eslint-disable */
import RestalistDb from '../src/scripts/data/restalist-idb'
import { itBehaveLikeRestalistFavorite } from './contract/favoriteRestaurantContractTest'

describe('Favorite Restaurant Idb Contract Test Implementation', () => {
    afterEach(async () => {
        (await RestalistDb.getAllRestaurant()).forEach(async (restaurant) => {
            await RestalistDb.deleteRestaurant(restaurant.id);
        });
    });

    itBehaveLikeRestalistFavorite(RestalistDb);
});