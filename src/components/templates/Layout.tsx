import { ReactNode, useContext } from "react";
import Header from "src/components/templates/Header";
import styles from "src/styles/components/templates/Layout.module.scss";
import { ScrollbarContext } from "src/libs/context";
import { useRouter } from "next/router";

type Props = {
  children: ReactNode;
};

// 管理者レイアウト
const Layout: React.FC<Props> = (props) => {
  const router = useRouter();
  const { scrollbar } = useContext(ScrollbarContext);

  return (
    <div className={`${styles.layout}`}>
      <Header />
      <div className={styles.content}>{props.children}</div>
    </div>
  );
};

export default Layout;
