class AppModel extends HTMLElement {
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
                /* Styles for the modal */
                .modal {
                    display: block; /* Hidden by default */
                    position: fixed; /* Stay in place */
                    z-index: 1; /* Sit on top */
                    left: 0;
                    top: 0;
                    width: 100%; /* Full width */
                    height: 100%; /* Full height */
                    overflow: auto; /* Enable scroll if needed */
                    background-color: rgb(0,0,0); /* Fallback color */
                    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
                }

                .modal-title {
                    font-size: 24px;
                    font-weight: bold;
                    margin-bottom: 10px;
                }

                .modal-footer {
                    margin-top: 20px;
                    text-align: right;
                }

                .modal-content {
                    background-color: #fefefe;
                    margin: 15% auto; /* 15% from the top and centered */
                    padding: 20px;
                    border: 1px solid #888;
                    width: 80%; /* Could be more or less, depending on screen size */
                }
                .close {
                    color: #aaa;
                    float: right;
                    font-size: 28px;
                    font-weight: bold;
                }
                .close:hover,
                .close:focus {
                    color: black;
                    text-decoration: none;
                    cursor: pointer;
                }
            </style>
            <div class="modal">
                <div class="modal-title">
                    <slot name="title"></slot>
                </div>
                <div class="modal-content">
                    <slot name="content"></slot>
                    <span class="close">&times;</span>
                </div>
                <div class="modal-footer">
                    <slot name="footer"></slot>
                </div>
            </div>
        `;

    /* this.modal = this.shadowRoot.querySelector(".modal");
    this.closeBtn = this.shadowRoot.querySelector(".close");

    this.closeBtn.addEventListener("click", () => {
      this.modal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
      if (event.target === this.modal) {
        this.modal.style.display = "none";
      }
    }); */
  }

  open() {
    this.modal.style.display = "block";
  }

  close() {
    this.modal.style.display = "none";
  }
}

customElements.define("app-modal", AppModel);
