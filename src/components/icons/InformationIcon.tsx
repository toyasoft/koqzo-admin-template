type Props = {};

// 情報アイコン
const InformationIcon: React.FC<Props> = (props) => {
  return (
    <svg
      role="img"
      height="18px"
      width="18px"
      viewBox="0 0 24 24"
      fill="#b3b3b3"
    >
      <path d="M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z"></path>
    </svg>
  );
};

export default InformationIcon;
