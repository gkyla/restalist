const RefreshComment = (allData) => {
    const userContainer = document.querySelector('.user-container');
    userContainer.innerHTML = '';

    allData.customerReviews.forEach((item) => {
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

export default RefreshComment;
