import styles from "src/styles/components/organisms/WebsiteDetail.module.scss";

type Props = {

};

// ウェブサイト詳細
const WebsiteDetail: React.FC<Props> = (props) => {
  return (
    <section className={styles.websiteDetail}>
      <header>
        <h3>基本情報</h3>
      </header>
      <div className={styles.formTable}>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label>ウェブサイト名</label>
            <div className={styles.content}>KOQZO</div>
          </div>
        </div>
        <div className={styles.formRow}>
          <div className={styles.formField}>
            <label>ドメイン</label>
            <div className={styles.content}>koqzo.com</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebsiteDetail
