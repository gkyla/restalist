class restaurantFooter extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <footer>Copyright © 2020 - Restalist</footer>
        `;
    }
}

customElements.define('restalist-footer', restaurantFooter);

export default restaurantFooter;
