import styles from "src/styles/components/atoms/Skeleton.module.scss";

type Props = {
  width: string;
  height: string;
  borderRadius: string;
};

// スケルトン
const Skelton: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.skeleton}
      style={{
        width: props.width,
        height: props.height,
        borderRadius: props.borderRadius,
      }}
    />
  );
};

export default Skelton;
