import { Result, Button } from 'antd';

interface Props {
  onBuy?: (data: { a: string }) => void;
}

export default ({ onBuy }: Props) => (
  <Result
    status="success"
    title="Successfully Purchased Cloud Server ECS!"
    subTitle="Order number: 2017182818828182881 Cloud server configuration takes 1-5 minutes, please wait."
    extra={[
      <Button type="primary" key="console">
        Go Console
      </Button>,
      <Button key="buy" onClick={() => onBuy?.({ a: 'hello' })}>
        Buy Again
      </Button>,
    ]}
  />
);
