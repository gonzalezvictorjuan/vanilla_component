class MyCounter extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  get count() {
    return this.getAttribute('count');
  }

  set count(val) {
    this.setAttribute('count', val);
  }

  static get observedAttributes() {
    return ['count'];
  }

  attributeChangedCallback(prop, oldVal, newVal) {
    if (prop == 'count') {
      this.render();
      this.logicEnable();
    }
  }

  inc() {
    this.count++;
    const v = this.count;
    const event = new CustomEvent('eIncrement', {
      bubbles: true,
      detail: { event: 'btnIncrement', value: v },
    });
    document.dispatchEvent(event);
  }

  connectedCallback() {
    this.render();
    this.logicEnable();
  }

  logicEnable() {
    const btn = this.shadow.querySelector('#btn');
    btn && btn.addEventListener('click', this.inc.bind(this));
  }

  render() {
    // this.innerHTML
    this.shadow.innerHTML = `
		<h1>Counter</h1>
		${this.count}
		<button id="btn">Increment</button>
		`;
  }
}

customElements.define('my-counter', MyCounter);
