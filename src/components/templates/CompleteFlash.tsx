import styles from "src/styles/components/templates/CompleteFlash.module.scss";

type Props = {};

// 保存メッセージ
const CompleteFlash: React.FC<Props> = (props) => {
  return (
    <div className={styles.flash}>
      <ul>
        <li>保存しました</li>
      </ul>
    </div>
  );
};

export default CompleteFlash;
