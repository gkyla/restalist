import restalistSourceData from '../../data/restaurant-data';
import { createRestaurantWeek, createRestaurantWeekItem } from '../templates/template-creator';

class restaurantWeek extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    async render() {
        this.innerHTML = createRestaurantWeek();
        const gridWeek = document.querySelector('.grid-week');
        const restaurants = await restalistSourceData.restaurantFilterBestWeek();
        restaurants.sort((a, b) => b.rating - a.rating);
        gridWeek.innerHTML = createRestaurantWeekItem(restaurants);
    }
}

customElements.define('restalist-week', restaurantWeek);

export default restaurantWeek;
