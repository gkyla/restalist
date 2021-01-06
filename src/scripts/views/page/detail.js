import '../component/restaurant-detail';

const Detail = {
    async render() {
        // Jika di halaman detail hilangkan jumbotron
        const restalistJumbotron = document.querySelector('restalist-jumbotron');
        restalistJumbotron.style.display = 'none';

        return ` 
        <restalist-detail>
        <div class="loading">
            <img src="images/loading.svg" alt="Loading Spinner"></img>
        </div>
        </restalist-detail>`;
    },
};

export default Detail;
