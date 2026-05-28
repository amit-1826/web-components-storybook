class UserProfile extends HTMLElement {
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
                .profile {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    max-width: 300px;
                }
                ::slotted([slot="avatar"]) {
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                }
                .name {
                    font-size: 1.2em;
                    font-weight: bold;
                }

                .info {
                    margin-left: 10px;
                }
                .bio {
                    font-size: 1em;
                    color: #666;
                }
            </style>
            <div class="profile">
                <slot class="avatar" name="avatar"></slot>
                <div class="info">
                    <div class="name"><slot name="name">User Name</slot></div>
                    <div class="bio"><slot name="bio">User bio goes here.</slot></div>
                </div>
            </div>
        `;
  }
}

if (!customElements.get("user-profile")) {
  customElements.define("user-profile", UserProfile);
}
