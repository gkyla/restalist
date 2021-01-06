import restalistSourceData from '../../data/restaurant-data';
import { createRestaurantList, createRestaurantListItem } from '../templates/template-creator';

class restalistList extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    async render() {
        this.innerHTML = createRestaurantList();
        const restaurants = await restalistSourceData.restaurantList();
        const gridList = document.querySelector('.grid-list');
        restaurants.forEach((restaurant) => {
            gridList.innerHTML += createRestaurantListItem(restaurant);
        });
    }
}
customElements.define('restalist-list', restalistList);

export default restalistList;
