class restalistJumbotron extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <section class="hero" role="img" aria-label="restalist hero background">
            <p>
                Looking for a <span>restaurant</span> <br />
                is <br />
                now <span>easier</span> than you imagine
            </p>
        </section>
        `;
    }
}

customElements.define('restalist-jumbotron', restalistJumbotron);

export default restalistJumbotron;
