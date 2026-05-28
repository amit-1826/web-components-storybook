import "./AppModal.js";

export default {
  title: "Components/AppModal",
  argTypes: {
    title: { control: "text" },
    content: { control: "text" },
    footer: { control: "text" },
  },
};

export const Default = () => `
  <app-modal>
    <span slot="title">Default modal</span>
    <div slot="content">This is a simple modal content.</div>
    <div slot="footer"><button>Close</button></div>
  </app-modal>
`;

export const Empty = () => `<app-modal></app-modal>`;

export const Success = () => `
  <app-modal>
    <span slot="title">Success</span>
    <div slot="content">Your operation completed successfully.</div>
    <div slot="footer"><button>Okay</button></div>
  </app-modal>
`;

export const Error = () => `
  <app-modal>
    <span slot="title">Error</span>
    <div slot="content">An unexpected error occurred.</div>
    <div slot="footer"><button>Retry</button></div>
  </app-modal>
`;

export const Loading = () => `
  <app-modal>
    <span slot="title">Loading</span>
    <div slot="content">Loading content...</div>
    <div slot="footer"><button disabled>Loading...</button></div>
  </app-modal>
`;

export const EdgeCase = () => `
  <app-modal>
    <span slot="title">Very long content</span>
    <div slot="content">${"Long content - ".repeat(100)}</div>
    <div slot="footer"><button>Close</button></div>
  </app-modal>
`;
