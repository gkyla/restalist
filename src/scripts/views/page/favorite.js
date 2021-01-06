import '../component/restaurant-favorite';

const Favorite = {
    async render() {
        const restalistJumbotron = document.querySelector('restalist-jumbotron');
        restalistJumbotron.style.display = '';

        return '<restalist-favorite></restalist-favorite>';
    },
};

export default Favorite;
