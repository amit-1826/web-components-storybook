import "./ToggleSwitch.js";

export default {
  title: "Components/ToggleSwitch",
};

export const Default = () => `<toggle-switch></toggle-switch>`;

export const Empty = () => `<toggle-switch></toggle-switch>`;

export const Success = () => `
  <toggle-switch id="t"></toggle-switch>
  <script>
    const el = document.getElementById('t');
    if (el) { el.isOn = true; el.render(); }
  </script>
`;

export const Error = () => `
  <toggle-switch id="t2"></toggle-switch>
  <script>
    const el = document.getElementById('t2');
    if (el) { el.isOn = null; el.render(); }
  </script>
`;

export const Loading = () => `
  <div>Loading switch...</div>
  <toggle-switch></toggle-switch>
`;

export const EdgeCase = () => `
  <div style="display:flex;gap:10px;flex-wrap:wrap;">
    ${"<toggle-switch></toggle-switch>".repeat(10)}
  </div>
`;
