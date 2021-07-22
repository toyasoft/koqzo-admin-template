type Props = {
  checked: boolean;
  name: string;
};

// ラジオボタン
const Radio: React.FC<Props> = (props) => {
  return (
    <>
      <span className={`radio ${props.checked && "here"}`}>
        <input type="radio" name={props.name} className="radio-input" />
        <svg
          role="img"
          viewBox="0 0 16 16"
          height="16"
          width="16"
          className="svg"
        >
          <circle r="3" cx="8" cy="8" className="circle"></circle>
        </svg>
      </span>

      <style jsx>{`
        .radio {
          border-radius: 50%;
          border: 2px solid #b3b3b3;
          background-color: #fff;
          position: relative;
          display: inline-block;
          vertical-align: middle;
          cursor: pointer;
          flex: 0 0 20px;
          height: 20px;
          width: 20px;
        }
        .here {
          background-color: #49a4d5;
          border-color: #49a4d5;
        }
        .radio-input {
          height: 20px;
          width: 20px;
          box-sizing: border-box;
          padding: 0;
          border-radius: 50%;
          cursor: pointer;
          position: absolute;
          top: -2px;
          left: -2px;
          appearance: none;
          border: 0;
          margin: 0;
        }
        .svg:not(:root) {
          overflow: hidden;
        }
        .svg {
          pointer-events: none;
          position: absolute;
          vertical-align: middle;
          display: inline-block;
        }
        .circle {
          fill: #ffffff;
        }
      `}</style>
    </>
  );
};

export default Radio;
