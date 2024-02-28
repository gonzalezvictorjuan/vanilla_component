class holaMundo extends HTMLElement {
  static props = ['name', 'surname'];

  constructor() {
    super();
    holaMundo.props.forEach((prop) => {
      this[prop] = null;
    });
  }

  static get observedAttributes() {
    return this.props;
  }

  attributeChangedCallback(nameAttr, oldValue, newValue) {
    if (holaMundo.props.includes(nameAttr)) this[nameAttr] = newValue;
  }

  connectedCallback() {
    console.log(this);
    this.innerHTML = `<div>
		<h1>Hola ${this.name} ${this.surname}</h1>
		<p>Esto es un párrafo</p>
		</div>`;
    this.style.color = 'blue';
  }
}

window.customElements.define('hola-mundo', holaMundo);
