import styles from "src/styles/components/atoms/FileInput.module.scss";
import ChevronDownIcon from "src/components/icons/ChevronDownIcon";
import { MutableRefObject } from "react";

type Props = {
  fileRef: MutableRefObject<any>;
  setFocus: (isFocused: boolean) => void;
  name: string;
  handleChange: (event: any) => void;
};

// ファイル入力
const FileInput: React.FC<Props> = ({
  fileRef,
  setFocus,
  name,
  handleChange,
}) => {
  return (
    <>
      <button
        type="button"
        className={styles.fileInput}
        onClick={() => {
          fileRef.current.click();
          setFocus(true);
        }}
        onBlur={(e) => {
          setFocus(false);
        }}
      >
        アップロード
        <ChevronDownIcon />
      </button>
      <input
        type="file"
        name={name}
        multiple={true}
        ref={fileRef}
        style={{ display: "none" }}
        onChange={handleChange}
        onFocus={(e) => {
          setFocus(true);
        }}
        onBlur={(e) => {
          setFocus(false);
        }}
      />
    </>
  );
};

export default FileInput;
