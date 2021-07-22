import styles from "src/styles/components/templates/Error.module.scss";

type Props = {};

const Error: React.FC<Props> = (props) => {
  return (
    <div className={styles.error}>
      <h2>ページが見つかりません</h2>
      <p>URLをご確認の上再度アクセスしてください。</p>
    </div>
  );
};

export default Error;
