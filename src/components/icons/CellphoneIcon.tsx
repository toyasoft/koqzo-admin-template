import { createFragmentContainer, graphql } from "react-relay";

type Props = {};

// スマホアイコン
const CellphoneIcon: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="100%"
      height="100%"
      fill="#ffffff"
    >
      <path
        d="
            M17,19H7V5H17M17,1H7C5.89,1 5,1.89 5,3V21A2,2 0 0,0 7,23H17A2,2 0 0,0 19,21V3C19,1.89 18.1,1 17,1Z
            "
      />
    </svg>
  );
};

export default CellphoneIcon;
