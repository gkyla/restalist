import RestalistDb from '../../data/restalist-idb';
import { createRestaurantList, createRestaurantListItem } from '../templates/template-creator';

class restaurantFavorite extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    async render() {
        this.innerHTML = createRestaurantList();
        const gridList = document.querySelector('.grid-list');
        const restaurants = await RestalistDb.getAllRestaurant();

        if (Object.entries(restaurants).length === 0) {
            gridList.innerHTML = '<h1 class="no-favorite">No Favorite Restaurant Yet</h1>';
        } else {
            gridList.innerHTML = '';
        }

        restaurants.forEach((restaurant) => {
            gridList.innerHTML += createRestaurantListItem(restaurant);
        });
    }
}

customElements.define('restalist-favorite', restaurantFavorite);

export default restaurantFavorite;
