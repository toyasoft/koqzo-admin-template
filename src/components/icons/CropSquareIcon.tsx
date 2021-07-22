type Props = {
  color: string;
};

// 正方形切り抜きアイコン
const CropSquareIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="100%"
      width="100%"
      fill={props.color}
    >
      <path
        d="
            M18,18H6V6H18M18,4H6A2,2 0 0,0 4,6V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18V6C20,4.89 19.1,4 18,4Z
            "
      />
    </svg>
  );
};

export default CropSquareIcon;
