import ReactDOM from 'react-dom/client';
import FancyBox from './components/FancyBox';
import FancyModal from './components/FancyModal';

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

window.customElements.define('wc-fancy-box', WCFancyBox);
window.customElements.define('wc-fancy-modal', WCFancyModal);
