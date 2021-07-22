type Props = {
  height?: string;
  width?: string;
  color?: string;
};

// 矢印下アイコン
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
            M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z
            "
      />
    </svg>
  );
};

export default ChevronDownIcon;
