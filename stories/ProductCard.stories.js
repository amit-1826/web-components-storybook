import "./ProductCard.js";

export default {
  title: "Components/ProductCard",
  argTypes: {
    product: { control: "object" },
  },
};

const Template = ({ product }) => {
  const element = document.createElement("product-card");

  element.product = product;

  return element;
};

export const Default = Template.bind({});

Default.args = {
  product: {
    title: "MacBook Pro",
    price: "$1999",
  },
};
