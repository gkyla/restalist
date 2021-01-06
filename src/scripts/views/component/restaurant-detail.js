import RestalistDb from '../../data/restalist-idb';
import restalistSourceData from '../../data/restaurant-data';
import UrlParser from '../../routes/url-parser';
import LikeInitiator from '../../utils/like-initiator';
import submitComment from '../../utils/submit-comment';
import { createRestaurantDetail, createRestaurantDetailItems, createErrorPage } from '../templates/template-creator';

class restalistDetail extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    async render() {
        try {
            const url = UrlParser.parseActiveUrlWithoutCombiner();
            const restaurant = await restalistSourceData.detailRestaurantList(url.id);
            this.innerHTML = createRestaurantDetail(restaurant);
            createRestaurantDetailItems(restaurant);
            const form = document.querySelector('#form');
            form.addEventListener('submit', submitComment);

            LikeInitiator.initElement({
                likeContainer: document.querySelector('.like-container'),
                favoriteRestaurant: RestalistDb,
                restaurant: {
                    id: restaurant.id,
                    name: restaurant.name,
                    pictureId: restaurant.pictureId,
                    city: restaurant.city,
                    rating: restaurant.rating,
                    description: restaurant.description,
                },
            });
        } catch (err) {
            this.innerHTML = createErrorPage();
        }
    }
}

customElements.define('restalist-detail', restalistDetail);

export default restalistDetail;
