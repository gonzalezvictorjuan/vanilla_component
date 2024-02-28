export default class BaseElementShadow extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
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
    if (!this.hasAttribute('data-id')) {
      this.setAttribute('data-id', Math.random().toString(36).slice(2, 9));
    }
  }

  connectedCallback() {
    this.render();
  }
  render() {
    console.error('You have to implement the method render!');
  }
}
