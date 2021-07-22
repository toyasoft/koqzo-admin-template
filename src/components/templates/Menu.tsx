import Link from "next/link";
import { useRouter } from "next/router";
import styles from "src/styles/components/templates/Menu.module.scss";

type Props = {};

// 管理者メニュー
const Menu: React.FC<Props> = (props) => {
  const router = useRouter();

  return (
    <nav className={styles.menu}>
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
    </nav>
  );
};

export default Menu;
