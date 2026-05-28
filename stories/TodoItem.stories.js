import "./TodoItem.js";

export default {
  title: "Components/TodoItem",
  argTypes: { checked: { control: "boolean" } },
};

export const Default = () => `
  <todo-item>
    <span slot="">Buy groceries</span>
    <span slot="description">Milk, eggs, bread</span>
  </todo-item>
`;

export const Empty = () => `<todo-item></todo-item>`;

export const Success = () => `
  <todo-item checked>
    <span slot="">Task complete</span>
    <span slot="description">Completed successfully</span>
  </todo-item>
`;

export const Error = () => `
  <todo-item checked="false">
    <span slot="">Broken item</span>
    <span slot="description">Invalid checked attribute</span>
  </todo-item>
`;

export const Loading = () => `
  <div>Loading todo...</div>
  <todo-item>
    <span slot="">Loading...</span>
  </todo-item>
`;

export const EdgeCase = () => `
  <todo-item>
    <span slot="">${"Very long task - ".repeat(50)}</span>
    <span slot="description">${"Long description - ".repeat(100)}</span>
  </todo-item>
`;
