import Link from "next/link";
import styles from "src/styles/components/templates/Breadcrumbs.module.scss";

type Props = {
  items: {
    name: string;
    href?: string;
  }[];
};

// パンくずリスト
const Breadcrumbs: React.FC<Props> = (props) => {
  return (
    <div className={styles.breadcrumbs}>
      <ul>
        {props.items.map((item) => (
          <li key={item.name}>
            {item.href ? (
              <Link href={item.href}>
                <a>{item.name}</a>
              </Link>
            ) : (
              <span>{item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Breadcrumbs;
