import BaseElement from './baseElement.js';

class HolaMundo2 extends BaseElement {
  static get observedAttributes() {
    return ['name', 'surname'];
  }

  // connectedCallback() {
  //   // Asegúrate de llamar al método render si aún no se ha llamado
  //   if (!this.shadowRoot) {
  //     this.attachShadow({ mode: 'open' });
  //     this.render();
  //   }
  // }

  render() {
    this.shadowRoot.innerHTML = `
		<style>
		  /* Más estilos específicos del componente */
		</style>
		<div>
		<h1>Hola ${this.name} ${this.surname}2</h1>
      <p>Esto es un párrafo</p>
			<slot></slot>
    </div>`;
  }
}

window.customElements.define('hola-mundo2', HolaMundo2);
