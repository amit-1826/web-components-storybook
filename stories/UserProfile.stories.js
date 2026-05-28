import "./UserProfile.js";

export default {
  title: "Components/UserProfile",
};

export const Default = () => `
  <user-profile>
    <img slot="avatar" src="/assets/avif-test-image.avif" alt="avatar" />
    <span slot="name">Jane Doe</span>
    <span slot="bio">Frontend engineer</span>
  </user-profile>
`;

export const Empty = () => `<user-profile></user-profile>`;

export const Success = () => `
  <user-profile>
    <img slot="avatar" src="/assets/avif-test-image.avif" alt="avatar" />
    <span slot="name">Samantha</span>
    <span slot="bio">Product designer</span>
  </user-profile>
`;

export const Error = () => `
  <user-profile>
    <span slot="name"></span>
    <span slot="bio"></span>
  </user-profile>
`;

export const Loading = () => `
  <div>Loading profile...</div>
  <user-profile>
    <span slot="name">Loading...</span>
    <span slot="bio">Please wait</span>
  </user-profile>
`;

export const EdgeCase = () => `
  <user-profile>
    <img slot="avatar" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='50' height='50'><rect width='50' height='50' fill='%23ccc'/></svg>" />
    <span slot="name">${"VeryLongUserName-".repeat(30)}</span>
    <span slot="bio">${"Long bio - ".repeat(100)}</span>
  </user-profile>
`;
