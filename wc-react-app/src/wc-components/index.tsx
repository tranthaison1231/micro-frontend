import ReactDOM from 'react-dom/client';
import Dashboard from './Dashboard';
import FancyBox from './FancyBox';
import FancyModal from './FancyModal';

class WCFancyBox extends HTMLElement {
  get name() {
    return this.getAttribute('name');
  }

  connectedCallback() {
    ReactDOM.createRoot(this).render(<FancyBox name={this.name} />);
  }
}

class WCFancyModal extends HTMLElement {
  get onbuy() {
    const fnc = this.getAttribute('onbuy');
    return typeof fnc === 'function' ? fnc : undefined;
  }
  connectedCallback() {
    ReactDOM.createRoot(this!).render(<FancyModal onBuy={this.onbuy} />);
  }
}

class WCDashboard extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this!).render(<Dashboard />);
  }
}

window.customElements.define('wc-dashboard', WCDashboard);
window.customElements.define('wc-fancy-box', WCFancyBox);
window.customElements.define('wc-fancy-modal', WCFancyModal);
