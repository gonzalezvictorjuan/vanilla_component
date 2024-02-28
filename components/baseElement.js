export default class BaseElement extends HTMLElement {
  constructor() {
    super();
    this.props = this.constructor.observedAttributes || [];
    this.props.forEach((prop) => {
      Object.defineProperty(this, prop, {
        get() {
          return this.getAttribute(prop);
        },
        set(value) {
          this.setAttribute(prop, value);
          this.render();
        },
      });
    });
  }

  connectedCallback() {
    this.render();
  }
  render() {
    console.error('You have to implement the method render!');
  }
}
