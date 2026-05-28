class ProductCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._product = null;
  }

  get product() {
    return this._product;
  }

  set product(value) {
    this._product = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this._product) {
      this.shadowRoot.innerHTML = `
      <style>
        .card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          width: 200px;
        }
        .card h2 {
          font-size: 1.2em;
          margin: 8px 0;
        }
        .card p {
          color: #888;
          font-size: 1em;
          margin: 0;
        }
      </style>
      <article class="card" aria-label="Product card">
        <h2>${this._product.title}</h2>
        <p>${this._product.price}</p>
      </article>
    `;
    } else {
      this.shadowRoot.innerHTML = `<p role="status">Product not found</p>`;
    }
  }
}

customElements.define("product-card", ProductCard);
