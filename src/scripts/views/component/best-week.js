import restalistSourceData from '../../data/restaurant-data';
import {
  createRestaurantWeek,
  createRestaurantWeekItem,
} from '../templates/template-creator';

class restaurantWeek extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = createRestaurantWeek();
    const gridWeek = document.querySelector('.grid-week');
    const restaurants = await restalistSourceData.restaurantFilterBestWeek();
    gridWeek.innerHTML = ''; // Remove skeleton when data arrived

    const filteredRating = restaurants
      .sort((a, b) => b.rating - a.rating)
      .filter((r, i) => i < 4);

    filteredRating.forEach((res, i) => {
      gridWeek.innerHTML += createRestaurantWeekItem(res, i);
    });
  }
}

customElements.define('restalist-week', restaurantWeek);

export default restaurantWeek;
