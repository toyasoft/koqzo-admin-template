import Link from "next/link";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import { useState, useRef, useEffect } from "react";
import { useOutsideClickHandler } from "src/libs/hooks";
import MenuIcon from "src/components/icons/MenuIcon";
import DrawerMenu from "src/components/templates/DrawerMenu";
import styles from "src/styles/components/templates/Header.module.scss";

import { Auth } from "aws-amplify";

type Props = {};

// 管理者ヘッダー
const Header: React.FC<Props> = (props) => {
  const router = useRouter();
  const [isSignoutOpened, setSignoutOpened] = useState(false);
  const [isMenuOpened, setMenuOpened] = useState(false);
  const ref = useRef(null);
  useOutsideClickHandler(ref, setSignoutOpened);
  

  return (
    <>
      <header className={styles.header}>
        <div className={styles.title}>
          <div className={styles.menuButton}>
            <button
              onClick={() => {
                setMenuOpened(!isMenuOpened);
              }}
            >
              <MenuIcon />
            </button>
          </div>
          <h1>
            <Link href="/">
              <a>虚空蔵管理テンプレート</a>
            </Link>
          </h1>
        </div>

        <div ref={ref}>
          <nav>
            <ul>
              <li>
                <button
                  type="button"
                  onClick={() => {
                    setSignoutOpened(!isSignoutOpened);
                  }}
                >
                  管理者
                </button>
              </li>
            </ul>
          </nav>
          <div
            className={`${styles.popover} ${isSignoutOpened && styles.visible}`}
          >
            <ul>
              <li>
                <a
                  onClick={() => {
                    Cookies.remove("jwtToken");
                    Auth.signOut();
                    router.push("/signin");
                  }}
                >
                  ログアウト
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <DrawerMenu isMenuOpened={isMenuOpened} />
    </>
  );
};

export default Header;
