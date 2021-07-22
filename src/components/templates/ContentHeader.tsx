import styles from "src/styles/components/templates/ContentHeader.module.scss";

type Props = {
  handleClick?: () => void;
  action: boolean;
  label?: string;
  title: string;
};

// コンテンツヘッダー
const ContentHeader: React.FC<Props> = (props) => {
  return (
    <header className={styles.header}>
      <h2>{props.title}</h2>
      {props.action && (
        <div className={styles.actions}>
          <button type="button" onClick={props.handleClick}>
            登録
          </button>
        </div>
      )}
    </header>
  );
};

export default ContentHeader;
