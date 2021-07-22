import styles from "src/styles/components/molecules/Loading.module.scss";

type Props = {
  label: string;
  isLoading: boolean;
};

// ローディング
const Loading: React.FC<Props> = (props) => {
  return (
    <div className={`${styles.loading} ${props.isLoading && styles.visible}`}>
      <p>{props.label}</p>
    </div>
  );
};

export default Loading;
