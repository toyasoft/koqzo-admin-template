type Props = {
  color: string;
};

// 横長切り抜きアイコン
const CropLandscapeIcon: React.FC<Props> = (props) => {
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
            M19,17H5V7H19M19,5H5A2,2 0 0,0 3,7V17A2,2 0 0,0 5,19H19A2,2 0 0,0 21,17V7C21,5.89 20.1,5 19,5Z
            "
      />
    </svg>
  );
};

export default CropLandscapeIcon;