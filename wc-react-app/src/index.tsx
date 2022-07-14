import ReactDOM from 'react-dom/client';
import Dashboard from './wc-components/Dashboard';
import FancyBox from './wc-components/FancyBox';
import FancyModal from './wc-components/FancyModal';

class WCFancyBox extends HTMLElement {
  get name() {
    return this.getAttribute('name');
  }

  connectedCallback() {
    ReactDOM.createRoot(this).render(<FancyBox name={this.name} />);
  }
}

class WCFancyModal extends HTMLElement {
  connectedCallback() {
    ReactDOM.createRoot(this!).render(<FancyModal />);
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
