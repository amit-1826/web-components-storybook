const template = document.createElement("template");
template.innerHTML = `
<style>
  label {
    color: green;
    display: block;
  }

  .description {
    font-size: 0.8em;
    color: gray;
    font-weight: lighter;
  }
</style>

<label>
    <input type="checkbox" />
    <span><slot></slot></span>
    <span class="description">
        <slot name="description"></slot>
    </span>
</label>

`;

class TodoItem extends HTMLElement {
  constructor() {
    super();

    const shadow = this.attachShadow({ mode: "open" });
    shadow.append(template.content.cloneNode(true));
    this.checkbox = shadow.querySelector("input[type=checkbox]");
  }

  connectedCallback() {
    this.checkbox.addEventListener("change", () => {
      if (this.checkbox.checked) {
        this.setAttribute("checked", "");
      } else {
        this.removeAttribute("checked");
      }
    });
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "checked") {
      this.checkbox.checked = newValue !== null;
    }
  }

  static get observedAttributes() {
    return ["checked"];
  }
}

customElements.define("todo-item", TodoItem);
