import { ReactNode } from "react";
import styles from "src/styles/components/molecules/TableWrapper.module.scss";

type Props = {
  children: ReactNode;
};

// テーブル囲い
const TableWrapper: React.FC<Props> = (props) => {
  return <div className={styles.tableWrapper}>{props.children}</div>;
};

export default TableWrapper;
