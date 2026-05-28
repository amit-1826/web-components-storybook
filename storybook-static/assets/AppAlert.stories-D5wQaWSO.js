import{i as e}from"./preload-helper-xPQekRTU.js";var t,n,r=e((()=>{t=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:`open`})}static observedAttributes=[`type`,`message`];attributeChangedCallback(){this.isConnected&&this.render()}connectedCallback(){this.render()}render(){let e=this.getAttribute(`type`)||`info`,t=this.getAttribute(`message`)||`This is an alert!`,n={error:`#f87171`,success:`#34d399`,info:`#60a5fa`},r=n[e]||n.info;this.shadowRoot.innerHTML=`
      <style>
        .alert {
          padding: 16px;
          border-radius: 8px;
          background: ${r};
          color: white;
          font-family: Arial;
        }
      </style>
      <div class="alert">
        ${t}
      </div>
    `}},customElements.define(`app-alert`,t),n=document.querySelector(`app-alert`),setTimeout(()=>{n.setAttribute(`type`,`success`),n.setAttribute(`message`,`This is a success alert!`)},3e3)})),i,a,o,s;e((()=>{r(),i={title:`Components/AppAlert`},a=()=>`
  <app-alert
    type="success"
    message="Profile updated">
  </app-alert>
`,o=()=>`
  <app-alert></app-alert>
`,a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`() => \`
  <app-alert
    type="success"
    message="Profile updated">
  </app-alert>
\``,...a.parameters?.docs?.source}}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`() => \`
  <app-alert></app-alert>
\``,...o.parameters?.docs?.source}}},s=[`Success`,`Empty`]}))();export{o as Empty,a as Success,s as __namedExportsOrder,i as default};