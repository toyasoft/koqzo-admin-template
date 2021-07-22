import { ReactNode } from "react";
import styles from "src/styles/components/templates/Main.module.scss";

type Props = {
  children: ReactNode;
};

// メイン
const Main: React.FC<Props> = (props) => {
  return <main className={styles.main}>{props.children}</main>;
};

export default Main;
