class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <nav>
            <div class="nav-container">
            <div class="logo" tabindex="0">
                <picture>
                    <source type="image/webp" srcset="./images/logo-small.webp 480w, ./images/logo.webp 800w" sizes="(max-width: 600px) 480px, 800px" alt="restalist logo">
                    <img src="./images/logo.png"
                    srcset="./images/logo-small.png 480w, ./images/logo.png 800w"
                    sizes="(max-width: 600px) 480px, 800px"
                    alt="restalist logo">
                </picture>
            </div>
            <button aria-label="press to open navigation" class="menu">☰</button>
            <ul class="nav-links">
                <li><a href="#/home">Home</a></li>
                <li><a href="#/favorite">Favorite</a></li>
                <li>
                    <a href="https://github.com/gkyla" target="_blank">About Us</a>
                </li>
            </ul>
            </div>
        </nav>
        `;
  }
}

customElements.define('restalist-navbar', Navbar);

export default Navbar;
