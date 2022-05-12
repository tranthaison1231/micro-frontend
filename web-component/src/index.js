import 'antd/dist/antd.css';
import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import FancyBox from './FancyBox';
import FancyModal from './FancyModal';

const withWC = (Component) => {
  const EnhanceComponent = ({ root }) => {
    const [props, setProps] = useState(() => {
      return root._initProps || {};
    });
    const ref = useRef();
    useEffect(() => {
      root._ref = {
        ref,
        props,
        setProps,
      };
    }, [props]);

    return <Component ref={ref} {...props} />;
  };
  return EnhanceComponent;
};
class WCFancyBox extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<FancyBox />, this);
  }
}

const WithWCFancyModal = withWC(FancyModal);
class WCFancyModal extends HTMLElement {
  connectedCallback() {
    ReactDOM.render(<WithWCFancyModal root={this} />, this);
  }
}

window.customElements.define('wc-fancy-box', WCFancyBox);
window.customElements.define('wc-fancy-modal', WCFancyModal);
