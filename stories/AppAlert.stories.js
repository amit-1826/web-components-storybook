import "./AppAlert.js";

// empty states
// error states
// loading states
// edge cases

export default {
  title: "Components/AppAlert",
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
