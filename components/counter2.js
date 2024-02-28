import BaseElement from './baseElement.js';

class MyCounter2 extends BaseElement {
  static get observedAttributes() {
    return ['count'];
  }

  inc() {
    console.log('entro');
    this.count++;
    const v = this.count;
    const event = new CustomEvent('eIncrement', {
      bubbles: true,
      detail: { event: 'btnIncrement', value: v },
    });
    document.dispatchEvent(event);
  }
  render() {
    this.innerHTML = `
		<h1>Counter2</h1>
		${this.count}
		<button id="btn">Increment</button>
		`;

    const btn = this.querySelector('#btn');
    btn && btn.addEventListener('click', this.inc.bind(this));
  }
}

window.customElements.define('my-counter2', MyCounter2);
