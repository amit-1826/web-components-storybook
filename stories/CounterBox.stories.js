import "./CounterBox.js";

export default {
  title: "Components/CounterBox",
};

export const Default = () => `<counter-box></counter-box>`;

export const Empty = () => `<counter-box></counter-box>`;

export const Success = () => `
  <counter-box id="c"></counter-box>
  <script>
    const el = document.getElementById('c');
    if (el) { el.count = 5; el.render(); }
  </script>
`;

export const Error = () => `
  <counter-box id="c2"></counter-box>
  <script>
    const el = document.getElementById('c2');
    if (el) { el.count = -1; el.render(); }
  </script>
`;

export const Loading = () => `
  <div>Loading counter...</div>
  <counter-box></counter-box>
`;

export const EdgeCase = () => `
  <counter-box id="big"></counter-box>
  <script>
    const el = document.getElementById('big');
    if (el) { el.count = 1000000; el.render(); }
  </script>
`;
