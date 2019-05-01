import { html, render } from 'lit-html';

let sayHello = (name) =>
  html`
    <h1>Hello ${name}!</h1>
  `;

render(sayHello('World'), document.body);

setTimeout(() => render(sayHello('Everyone'), document.body), 2000);
