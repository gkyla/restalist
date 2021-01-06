import RestalistDb from '../data/restalist-idb';
import { createLikeButtonTemplate, createLikedButtonTemplate } from '../views/templates/template-creator';

const LikeInitiator = {
    async initElement({ likeContainer, favoriteRestaurant, restaurant }) {
        this._likeContainer = likeContainer;
        this._restaurant = restaurant;

        this._favoriteRestaurant = favoriteRestaurant;
        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await RestalistDb.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeContainer.innerHTML = createLikeButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await RestalistDb.putRestaurant(this._restaurant);
            await this._renderButton();
        });
    },

    _renderLiked() {
        this._likeContainer.innerHTML = createLikedButtonTemplate();

        const likeButton = document.querySelector('#likeButton');
        likeButton.addEventListener('click', async () => {
            await RestalistDb.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeInitiator;
