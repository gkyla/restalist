import restalistSourceData from '../../data/restaurant-data';
import { createRestaurantCafe, createRestaurantCafeItem } from '../templates/template-creator';

class restalistCafe extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    async render() {
        const restaurants = restalistSourceData.restaurantCafe();
        this.innerHTML = createRestaurantCafe();
        const cafeWrapper = document.querySelector('.cafe-wrapper');
        restaurants.forEach((newRestaurants) => {
            cafeWrapper.innerHTML += createRestaurantCafeItem(newRestaurants);
        });
    }
}

customElements.define('restalist-cafe', restalistCafe);

export default restalistCafe;
