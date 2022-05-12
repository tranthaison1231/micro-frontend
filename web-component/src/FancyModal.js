import React, { useState, useImperativeHandle, useEffect, useRef } from 'react';
import { Modal, Input } from 'antd';

const FancyModal = React.forwardRef(({ onModalClose }, ref) => {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [value, setValue] = useState('Some content...');
  const _r = useRef({ v: value }).current;

  useImperativeHandle(
    ref,
    () => ({
      setIsModalVisible,
    }),
    []
  );

  _r.v = value;
  useEffect(() => {
    if (!isModalVisible) {
      onModalClose && onModalClose(_r.v);
    }
  }, [isModalVisible]);

  return (
    <Modal
      title="Basic Modal"
      visible={isModalVisible}
      onOk={() => setIsModalVisible(false)}
      onCancel={() => setIsModalVisible(false)}
    >
      <Input.TextArea rows={4} value={value} onChange={(e) => setValue(e.target.value)} />
    </Modal>
  );
});

export default FancyModal;
