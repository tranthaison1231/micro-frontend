interface Props {
  name?: string | null;
}

const FancyBox = ({ name }: Props) => {
  return <div>{name ?? ''}</div>;
};

export default FancyBox;
