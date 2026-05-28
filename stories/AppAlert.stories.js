import "./AppAlert.js";

// empty states
// error states
// loading states
// edge cases

export default {
  title: "Components/AppAlert",
  argTypes: { type: { control: "text" }, message: { control: "text" } },
};

export const Success = () => `
  <app-alert
    type="success"
    message="Profile updated">
  </app-alert>
`;

export const Empty = () => `
  <app-alert></app-alert>
`;

export const Error = () => `
  <app-alert
    type="error"
    message="Failed to update profile">
  </app-alert>
`;

export const Loading = () => `
  <app-alert
    type="info"
    message="Loading...">
  </app-alert>
`;

export const EdgeCase = () => `
  <app-alert
    type="unknown"
    message="This is an edge case">
  </app-alert>
`;
