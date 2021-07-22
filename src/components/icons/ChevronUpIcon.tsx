type Props = {
  height?: string;
  width?: string;
  color?: string;
};

// 矢印上アイコン
const ChevronDownIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={props.height ? props.height : "16px"}
      width={props.width ? props.width : "16px"}
      fill={props.color ? props.color : "rgba(0, 0, 0, 0.55)"}
    >
      <path
        d="
            M7.41,15.41L12,10.83L16.59,15.41L18,14L12,8L6,14L7.41,15.41Z
            "
      />
    </svg>
  );
};

export default ChevronDownIcon;
