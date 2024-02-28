import BaseElementShadow from './baseElementShadow.js';

class HolaMundo3 extends BaseElementShadow {
  static get observedAttributes() {
    return ['name', 'surname'];
  }

  render() {
    this.shadowRoot.innerHTML += `
      <div>
        <h1>Hola ${this.name || ''} ${this.surname || ''}</h1>
        <p>Esto es un párrafo y tu ID es ${this.getAttribute('data-id')}</p>
				<slot></slot>
      </div>
    `;
  }
}

window.customElements.define('hola-mundo3', HolaMundo3);
