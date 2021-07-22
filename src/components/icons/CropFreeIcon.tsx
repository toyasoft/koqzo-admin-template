type Props = {
  color: string;
};

// 自由切り抜きアイコン
const CropFreeIcon: React.FC<Props> = (props) => {
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
            M19,3H15V5H19V9H21V5C21,3.89 20.1,3 19,3M19,19H15V21H19A2,2 0 0,0 21,19V15H19M5,15H3V19A2,2 0 0,0 5,21H9V19H5M3,5V9H5V5H9V3H5A2,2 0 0,0 3,5Z
            "
      />
    </svg>
  );
};

export default CropFreeIcon;
