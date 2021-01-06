/* eslint-disable import/prefer-default-export */
import RestalistDb from '../../src/scripts/data/restalist-idb';
import LikeInitiator from '../../src/scripts/utils/like-initiator';

const CreateLikeButtonPresenterRestaurant = async (restaurant) => {
    await LikeInitiator.initElement({
        likeContainer: document.querySelector('.like-container'),
        favoriteRestaurant: RestalistDb,
        restaurant,
    });
};

export { CreateLikeButtonPresenterRestaurant };
