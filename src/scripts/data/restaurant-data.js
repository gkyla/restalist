import API_ENDPOINT from '../global-setting/api-endpoint';
import CONFIG from '../global-setting/config';
import RefreshComment from '../utils/refresh-comment';
import dataRes from './DATA.json';

// Data yang saya tambahkan dari Submission 1

class restalistSourceData {
    static async restaurantFilterBestWeek() {
        const gridWeek = document.querySelector('.grid-week');
        const response = await fetch(API_ENDPOINT.LIST);
        const data = await response.json();
        gridWeek.innerHTML = '';
        return data.restaurants;
    }

    static restaurantCafe() {
        const dataNewRestaurants = dataRes.newRestaurant;
        return dataNewRestaurants;
    }

    static async restaurantList() {
        const gridList = document.querySelector('.grid-list');
        const response = await fetch(API_ENDPOINT.LIST);
        const data = await response.json();
        gridList.innerHTML = '';
        return data.restaurants;
    }

    static async detailRestaurantList(id) {
        const loading = document.querySelector('.loading');
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        const data = await response.json();
        loading.style.display = 'none';
        return data.restaurant;
    }

    static async detailRestaurantComent(dataComment) {
        const response = await fetch(API_ENDPOINT.REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Auth-Token': CONFIG.API_KEY,
            },
            body: JSON.stringify(dataComment),
        });
        const data = await response.json();
        const allData = RefreshComment(data);
        return allData;
    }
}

export default restalistSourceData;
