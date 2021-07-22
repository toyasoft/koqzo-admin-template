import Link from "next/link";
import { useRouter } from "next/router";
import styles from "src/styles/components/templates/DrawerMenu.module.scss";

type Props = {
  isMenuOpened: boolean;
};

// 管理者ドロワーメニュー
const DrawerMenu: React.FC<Props> = (props) => {
  const router = useRouter();
  return (
    <div
      className={`${styles.drawerMenu} ${
        props.isMenuOpened && styles.drawerOpened
      }`}
    >
      <div className={styles.content}>
        <div className={styles.grid}>
          <div className={styles.section}>
            <ul>
            <li className={`${["/"].includes(router.pathname) && styles.here}`}>
              <Link href="/">
                <a>管理ホーム</a>
              </Link>
            </li>
            {/* <li
              className={`${["/article"].includes(router.pathname) && styles.here}`}
            >
              <Link href="/article">
                <a>記事管理</a>
              </Link>
            </li> */}

            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrawerMenu;
