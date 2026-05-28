class ToggleSwitch extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.isOn = false;
  }

  connectedCallback() {
    this.render();
  }

  switchToggle() {
    this.isOn = !this.isOn;
    this.dispatchCustomEvent();
    this.render();
  }

  dispatchCustomEvent() {
    this.dispatchEvent(
      new CustomEvent("toggle-change", {
        detail: { isOn: this.isOn },
      }),
    );
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                .switch {
                    position: relative;
                    display: inline-block;
                    width: 60px;
                    height: 34px;
                }
                .switch input {
                    opacity: 0;
                    width: 0;
                    height: 0;
                }
                .slider {
                    position: absolute;
                    cursor: pointer;
                    border-radius: 34px;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background-color: ${this.isOn ? "#4CAF50" : "#ccc"};
                    transition: .4s;
                }
                .slider:before {
                    position: absolute;
                    border-radius: 50%;
                    content: "";
                    height: 26px;
                    width: 26px;
                    left: 4px;
                    bottom: 4px;
                    background-color: white;
                    transition: .4s;
                    transform: ${this.isOn ? "translateX(26px)" : "translateX(0)"};
                }
            </style>
            <label class="switch">
                <input type="checkbox" ${this.isOn ? "checked" : ""}>
                <span class="slider"></span>
            </label>
        `;

    this.shadowRoot
      .querySelector("input")
      .addEventListener("change", () => this.switchToggle());
  }
}

if (!customElements.get("toggle-switch")) {
  customElements.define("toggle-switch", ToggleSwitch);
}

/* const switchToggle = document.querySelector("toggle-switch");
switchToggle.addEventListener("toggle-change", (event) => {
  console.log("Toggle state:", event.detail.isOn);
}); */
