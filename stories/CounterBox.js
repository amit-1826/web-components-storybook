class CounterBox extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.count = 0;
  }

  increment() {
    this.count++;
    this.render();
    this.dispatchEvent(
      new CustomEvent("count-changed", {
        detail: { count: this.count },
      }),
    );
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = `
            <style>
                .counter-box {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    font-family: Arial, sans-serif;
                }
                .count {
                    font-size: 24px;
                    font-weight: bold;
                }
                button {
                    padding: 8px 16px;
                    font-size: 16px;
                    cursor: pointer;
                }
            </style>
            <div class="counter-box">
                <button id="increment"><span class="count">${this.count}</span></button>
            </div>
        `;

    this.shadowRoot.querySelector("button").addEventListener("click", () => {
      this.increment();
    });
  }
}

if (!customElements.get("counter-box")) {
  customElements.define("counter-box", CounterBox);
}

/* const counter = document.querySelector("counter-box");

counter.addEventListener("count-changed", (event) => {
  console.log(event.detail.count);
}); */
