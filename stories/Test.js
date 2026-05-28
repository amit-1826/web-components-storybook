const template = document.createElement("template");
template.innerHTML = `
 <style>
    p {
        color: blue;
    }
 </style>

 <p>Hello, <slot name="name"></slot>!</p>
`;

class HelloUser extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });

    /* this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    const nameSlot = this.shadowRoot.querySelector('slot[name="name"]');
    nameSlot.textContent = name; */
    // const shadow = this.attachShadow({ mode: "open" });
    // shadow.append(template.content.cloneNode(true));
  }

  connectedCallback() {
    const name = this.getAttribute("name") || "Guest";

    this.shadowRoot.innerHTML = `
    <style>
        h1 {
          color: crimson;
          font-family: Arial;
        }
      </style>
    <h1>Hello, ${name}!</h1>`;
  }
}

if (!customElements.get("hello-user")) {
  customElements.define("hello-user", HelloUser);
}
