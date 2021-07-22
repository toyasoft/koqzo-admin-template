type Props = {};

// 切り抜きアイコン
const CropIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      height="100%"
      width="100%"
      fill="#ffffff"
    >
      <path
        d="
            M7,17V1H5V5H1V7H5V17A2,2 0 0,0 7,19H17V23H19V19H23V17M17,15H19V7C19,5.89 18.1,5 17,5H9V7H17V15Z
            "
      />
    </svg>
  );
};

export default CropIcon;
