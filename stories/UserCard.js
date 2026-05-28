class UserCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static observedAttributes = ["name", "role"];

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const name = this.getAttribute("name") || "Guest";
    const role = this.getAttribute("role") || "User";
    this.shadowRoot.innerHTML = `
      <style>
        h2 {
          margin: 0;
          color: #2563eb;
        }

        .card {
            width: 250px;
          padding: 16px;
          border-radius: 12px;
          background: white;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          font-family: Arial;
        }

          p {
          margin-top: 8px;
          color: #555;
        }
      </style>
      <div class="card">
        <h2>${name}</h2>
        <p>${role}</p>
      </div>
    `;
  }
}

if (!customElements.get("user-card")) {
  customElements.define("user-card", UserCard);
}

const card = document.querySelector("user-card");
setTimeout(() => {
  card.setAttribute("name", "Alice");
  card.setAttribute("role", "Admin");
}, 2000);
