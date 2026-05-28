class TodoList extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this._todos = [];
  }

  get todos() {
    return this._todos;
  }

  set todos(value) {
    this._todos = value;
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    if (this._todos.length > 0) {
      this.shadowRoot.innerHTML = `
      <style>
        ul {
          list-style: none;
          padding: 0;
        }
        li {
          background: #f9f9f9;
          margin: 8px 0;
          padding: 12px;
          border-radius: 4px;
        }
      </style>
      <ul>
        ${this._todos.map((todo) => `<li>${todo}</li>`).join("")}
      </ul>
     `;
    } else {
      this.shadowRoot.innerHTML = `<p role="status">No todos found</p>`;
    }
  }
}

customElements.define("todo-list", TodoList);
