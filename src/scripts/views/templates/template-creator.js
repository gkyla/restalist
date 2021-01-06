import CONFIG from '../../global-setting/config';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

const createSkeletonRestaurantWeekItem = () => `
    <div class="box box1 skeleton">
        <div class="panel"> <div class="best-week-desc"> </div>  <div class="rating"> </div></div>
    </div>
    <div class="box box2 skeleton" >
        <div class="panel"> <div class="best-week-desc"> </div> <div class="rating"> </div></div>
    </div>
    <div class="box box3 skeleton" >
        <div class="panel"> <div class="best-week-desc"> </div> <div class="rating"> </div></div>
    </div>
    <div class="box box4 skeleton">
        <div class="panel"> <div class="best-week-desc"> </div> <div class="rating"> </div></div>
    </div>
    `;

const createSkeletonRestaurantListItem = (numberToDisplay) => {
    let cardSkeleton = '';

    for (let currentNumber = 0; currentNumber <= numberToDisplay; currentNumber += 1) {
        cardSkeleton
            += `
        <div div class="card skeleton" >
        <div class="card-preview">

        </div>
        <div class="card-value" >
            <div class="city-value" >

            </div>
            <div class="rating-value" >

            </div>
        </div>
        <div class="card-info">
            <h2>Loading title</h2>
            <p>
                loading description ......
            </p>
        </div>
        <div class="card-border"></div>
    </div >
        `;
    }

    return cardSkeleton;
};

const createRestaurantWeek = () => `
    <section class="restaurant-week">
        <div class="wrapper">
            <div class="title">
                <h1>Best Restaurant This Week</h1>
            </div>
            <div class="grid-week">
                ${createSkeletonRestaurantWeekItem()}
            </div>
        </div>
    </section>
`;

const createRestaurantList = () => `
    <section class="restaurant-list" >
        <div class="wrapper">
            <div class="title">
                <h1>Restaurant List</h1>
            </div>
            <div class="grid-list">
                ${createSkeletonRestaurantListItem(10)}
            </div>
        </div>
    </section>
    `;

const createRestaurantWeekItem = (restaurantRatingFiltered) => `
   <div class="box box1">
      <img class="lazyload" data-src="${CONFIG.BASE_URL_API_IMAGE_SMALL}/${restaurantRatingFiltered[0].pictureId}" alt="${restaurantRatingFiltered[0].name} Restaurant" >
      <div class="panel">${restaurantRatingFiltered[0].name} <br> <div class="rating" >${restaurantRatingFiltered[0].rating} <img class="star lazyload" data-src="images/star.png" alt="Rating"></div></div>
   </div>
   <div class="box box2" >
      <img class="lazyload" data-src="${CONFIG.BASE_URL_API_IMAGE_SMALL}/${restaurantRatingFiltered[1].pictureId}" alt="${restaurantRatingFiltered[1].name} Restaurant" >
      <div class="panel">${restaurantRatingFiltered[1].name} <br> <div class="rating">${restaurantRatingFiltered[1].rating} <img class="star lazyload"  data-src="images/star.png" alt="Rating"></div></div>
   </div>
   <div class="box box3" >
      <img class="lazyload" data-src="${CONFIG.BASE_URL_API_IMAGE_SMALL}/${restaurantRatingFiltered[2].pictureId}" alt="${restaurantRatingFiltered[2].name} Restaurant">
      <div class="panel">${restaurantRatingFiltered[2].name} <br> <div class="rating">${restaurantRatingFiltered[2].rating} <img class="star lazyload"  data-src="images/star.png" alt="Rating"></div></div>
   </div>
   <div class="box box4">
      <img class="lazyload" data-src="${CONFIG.BASE_URL_API_IMAGE_SMALL}/${restaurantRatingFiltered[3].pictureId}" alt="${restaurantRatingFiltered[3].name} Restaurant" >
      <div class="panel">${restaurantRatingFiltered[3].name} <br> <div class="rating">${restaurantRatingFiltered[3].rating} <img class="star lazyload"  data-src="images/star.png" alt="Rating"></div></div>
   </div>
`;

const createRestaurantListItem = (restaurant) => `
    <div div class="card" >
        <div class="card-preview">
            <img
                data-src="${CONFIG.BASE_URL_API_IMAGE_SMALL}/${restaurant.pictureId}"
                alt="${restaurant.name} Restaurant"
                class="img-preview lazyload"
            />
        </div>
        <div class="card-value" >
            <div class="city-value" >
                <img
                    class="city lazyload"
                    data-src="images/urban.png"
                    alt="City"
                />
                ${restaurant.city}
            </div>
            <div class="rating-value" >
                <img
                    class="star lazyload"
                    data-src="images/star.png"
                    alt="Rating"
                />
                ${restaurant.rating}
            </div>
        </div>
        <div class="card-info">
            <h2><a href="/#/detail/${restaurant.id}">${restaurant.name}</a></h2>
            <p>
                ${restaurant.description}
            </p>
        </div>
        <div class="card-border"></div>
    </div >
    `;

const createRestaurantCafe = () => `
    <section class="cafe-time" >
        <div class="wrapper">
            <div class="title">
                <h1>Cafe Time - New this week</h1>
            </div>
            <div class="cafe-wrapper">
                <!-- New Data  -->
            </div>
        </div>
    </section>
    `;

const createRestaurantCafeItem = (newRestaurant) => `
    <div class="cafe" >
        <div class="cafe-img" >
            <img
                class="lazyload"
                data-src="${newRestaurant.pictureId}"
                alt="${newRestaurant.name} Cafe Image">
        </div>
            <div class="cafe-info" >
                <h2>${newRestaurant.name}</h2>
                <p>${newRestaurant.description}</p>
            <div class="cafe-value">
                <div class="city-value">
                    <img class="city lazyload" data-src="images/urban.png" alt="City" />
                ${newRestaurant.city}
                </div>
                <div class="rating-value">
                    <img class="star lazyload" data-src="images/star.png" alt="Rating" />
                ${newRestaurant.rating}
                </div>
            </div>
        </div>
    </div>
`;

const createRestaurantDetail = (restaurant) => `
    <div class="wrapper" >
    <div class="card-detail" >
        <img src="${CONFIG.BASE_URL_API_IMAGE_MEDIUM}/${restaurant.pictureId}" class="img-detail" alt="${restaurant.name}">
        <div class="name-detail">
            <h1>${restaurant.name}</h1>
            <div class="like-container"> 

            </div>
        </div>
        <div class="card-info">
            <div class="value-detail">
                <div class="city-value">
                    <img class="city" src="images/urban.png" alt="City" />
                    ${restaurant.city}
                </div>
                <div class="rating-value">
                    <img class="star" src="images/star.png" alt="Rating" />
                    ${restaurant.rating}
                </div>

            </div>
            <div class="description-detail">
                <h2 class="sub-detail">Restaurant Description</h2>
                <div class="box-detail">${restaurant.description}</div>
            </div>
            <h2 class="sub-detail">Restaurant Menu</h2>
            <div class="menu-detail">
                <div class="foods">
                    <h3 class="foods-title">Foods</h3>
                    <ul class="ul-foods">
                   
                    </ul>
                </div>
                <div class="drinks">
                    <h3 class="drinks-title">Drinks</h3>
                    <ul class="ul-drinks">

                    </ul>
                </div>
            </div>
            <h2 class="sub-detail">Restaurant Info</h2>
            <div class="info-detail">
                <div class="address">
                    <h3>Address</h3>
                    <p>${restaurant.address}</p>
                </div>
                <div class="category">
                    <h3>Categories</h3>
                    <div class="categories-detail">
                     
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="card-comment">
        <div class="name-detail">
            <h1>User Review</h1>
        </div>
        <div class="user-container">

        </div>
        
        <div class="write-comment">
            <div class="img-box">
                <img src="images/chat-box.svg" alt="Chat box" class="chat-box">
            </div>
            <form id="form" method="post">
                <input type="text" id="name" placeholder="Name">
                <input type="text" id="review" placeholder="Any Feedback for this restaurant ?">
                <button type="submit" class="commentBtn" aria-label="click to send feedback">Send Feedback</button>
            </form>
        </div> 
    </div>
</div>
`;

const createRestaurantDetailItems = (restaurant) => {
    const foodItems = restaurant.menus.foods;
    const drinkItems = restaurant.menus.drinks;
    const consumerItems = restaurant.consumerReviews;
    const categoriesItems = restaurant.categories;

    // Mendapatkan Container untuk menampung data array of object
    const ulFoods = document.querySelector('.ul-foods');
    const ulDrinks = document.querySelector('.ul-drinks');
    const userContainer = document.querySelector('.user-container');
    const categoriesContainer = document.querySelector('.categories-detail');

    foodItems.forEach((item) => {
        ulFoods.innerHTML += `<li>${item.name}</li>`;
    });
    drinkItems.forEach((item) => {
        ulDrinks.innerHTML += `<li>${item.name}</li>`;
    });
    categoriesItems.forEach((item) => {
        categoriesContainer.innerHTML += `${item.name} `;
    });
    consumerItems.forEach((item) => {
        userContainer.innerHTML += `
        <div class="user">
            <div class="img-box">
                <img src="images/user.png" alt="User Comment" />
            </div>
            <div class="user-content">
                <div class="name">
                    ${item.name}
                </div>
                <div class="date">
                    ${item.date}
                </div>
                <div class="review">
                    ${item.review}
                </div>
            </div>
        </div>
        `;
    });
};

const createErrorPage = () => `
<div class="wrapper">
    <div class="error-content">
        <h1>Sorry the page you are looking for is not found or deleted</h1>
        <img src="images/error.svg" alt="Error 404" class="error-img"></img>
    </div>
</div>`;

const createLikeButtonTemplate = () => `
<button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="icon-heart-o" aria-hidden="true"></i>
</button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="icon-heart" aria-hidden="true"></i>
  </button>
`;

export {
    createRestaurantList,
    createRestaurantListItem,
    createRestaurantWeek,
    createRestaurantWeekItem,
    createRestaurantCafe,
    createRestaurantCafeItem,
    createRestaurantDetail,
    createRestaurantDetailItems,
    createErrorPage,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createSkeletonRestaurantListItem,
};
