import { FormikErrors } from "formik";
import styles from "src/styles/components/molecules/Flash.module.scss";

type Props = {
  errors: FormikErrors<any>;
};

// フラッシュ
const Flash: React.FC<Props> = (props) => {
  return (
    <div className={styles.flash}>
      <ul>
        {Object.values(props.errors).map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    </div>
  );
};

export default Flash;
