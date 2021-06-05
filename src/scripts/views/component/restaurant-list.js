import restalistSourceData from '../../data/restaurant-data';
import {
  createRestaurantList,
  createRestaurantListItem,
} from '../templates/template-creator';

class restalistList extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  async render() {
    this.innerHTML = createRestaurantList();
    const gridList = document.querySelector('.grid-list');
    const restaurants = await restalistSourceData.restaurantList();
    gridList.innerHTML = ''; // Remove skeleton when data arrived

    restaurants.forEach((restaurant) => {
      gridList.innerHTML += createRestaurantListItem(restaurant);
    });
  }
}
customElements.define('restalist-list', restalistList);

export default restalistList;
