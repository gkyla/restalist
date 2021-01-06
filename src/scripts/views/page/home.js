import '../component/best-week';
import '../component/restaurant-list';
import '../component/cafe';

const Home = {
    async render() {
        const restalistJumbotron = document.querySelector('restalist-jumbotron');
        restalistJumbotron.style.display = '';

        return ` 
            <restalist-week>
            </restalist-week>
            <restalist-list>
            </restalist-list>
            <restalist-cafe>
            </restalist-cafe>

            `;
    },
};

export default Home;
