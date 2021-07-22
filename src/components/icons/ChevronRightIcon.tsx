type Props = {
  height?: string;
  width?: string;
  color?: string;
};

// 矢印右アイコン
const ChevronRightIcon: React.FC<Props> = (props) => {
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
            M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z
            "
      />
    </svg>
  );
};

export default ChevronRightIcon;
