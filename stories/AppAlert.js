class AppAlert extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  static observedAttributes = ["type", "message"];

  attributeChangedCallback() {
    if (this.isConnected) {
      this.render();
    }
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const type = this.getAttribute("type") || "info";
    const message = this.getAttribute("message") || "This is an alert!";
    const colors = {
      error: "#f87171",
      success: "#34d399",
      info: "#60a5fa",
    };
    const color = colors[type] || colors.info;

    this.shadowRoot.innerHTML = `
      <style>
        .alert {
          padding: 16px;
          border-radius: 8px;
          background: ${color};
          color: white;
          font-family: Arial;
        }
      </style>
      <div class="alert">
        ${message}
      </div>
    `;
  }
}

if (!customElements.get("app-alert")) {
  customElements.define("app-alert", AppAlert);
}

const alert = document.querySelector("app-alert");

setTimeout(() => {
  alert.setAttribute("type", "success");
  alert.setAttribute("message", "This is a success alert!");
}, 3000);
