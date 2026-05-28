class AppCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                .card {
                    width: 300px;
                    background-color: #f8f8f8;
                    padding: 10px 20px;
                    border-radius: 10px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                    font-family: Arial, sans-serif;
                }
            </style>
            <div class="card">
                <slot></slot>
            </div>
        `;
  }
}

customElements.define("app-card", AppCard);
