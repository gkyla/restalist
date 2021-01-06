import restalistSourceData from '../data/restaurant-data';
import UrlParser from '../routes/url-parser';

const submitComment = (e) => {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const nameUser = document.querySelector('#name').value;
    const reviewUser = document.querySelector('#review').value;
    const urlId = url.id;
    e.preventDefault();
    const dataComment = {
        id: urlId,
        name: nameUser,
        review: reviewUser,
    };
    restalistSourceData.detailRestaurantComent(dataComment);
};

export default submitComment;
