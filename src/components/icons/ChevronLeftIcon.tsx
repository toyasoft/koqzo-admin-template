type Props = {
  height?: string;
  width?: string;
  color?: string;
};

// 矢印左アイコン
const ChevronLeftIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height={props.height ? props.height : "14px"}
      width={props.width ? props.width : "14px"}
      fill={props.color ? props.color : "rgba(0, 0, 0, 0.55)"}
    >
      <path
        d="
            M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z
            "
      />
    </svg>
  );
};

export default ChevronLeftIcon;
