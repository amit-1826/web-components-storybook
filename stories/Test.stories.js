import "./Test.js";

export default {
  title: "Components/Test",
  argTypes: { name: { control: "text" } },
};

export const Default = () => `<hello-user name="Alice"></hello-user>`;

export const Empty = () => `<hello-user></hello-user>`;

export const Success = () => `<hello-user name="José 🚀"></hello-user>`;

export const Error = () => `<hello-user name="12345"></hello-user>`;

export const Loading = () => `<hello-user name="Loading..."></hello-user>`;

export const EdgeCase = () =>
  `<hello-user name="${"VeryLongName-".repeat(50)}"></hello-user>`;
