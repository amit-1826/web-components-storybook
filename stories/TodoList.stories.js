import "./TodoList.js";

export default {
  title: "Components/TodoList",
  argTypes: {
    todos: { control: "array" },
  },
  args: {
    todos: ["Buy groceries", "Walk the dog", "Read a book"],
  },
};

const Template = ({ todos }) => {
  const element = document.createElement("todo-list");

  element.todos = todos;

  return element;
};

export const Default = Template.bind({});
