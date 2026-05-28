import "./UserCard.js";

export default {
  title: "Components/UserCard",
  argTypes: { name: { control: "text" }, role: { control: "text" } },
};

export const Default = () =>
  `<user-card name="Alice" role="Member"></user-card>`;

export const Empty = () => `<user-card></user-card>`;

export const Success = () => `<user-card name="Bob" role="Admin"></user-card>`;

export const Error = () => `<user-card name="" role=""></user-card>`;

export const Loading = () =>
  `<div>Loading user...</div><user-card></user-card>`;

export const EdgeCase = () =>
  `<user-card name="${"VeryLongName-".repeat(30)}" role="${"Role-".repeat(20)}"></user-card>`;
