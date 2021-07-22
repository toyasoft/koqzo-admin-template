import { ReactNode, useEffect, useRef, useState } from "react";
import { useOutsideClickHandler } from "src/libs/hooks";
import CloseIcon from "src/components/icons/CloseIcon";
import Loading from "src/components/templates/Loading";
import { FormikErrors, FormikTouched } from "formik";
import Flash from "src/components/templates/Flash";
import styles from "src/styles/components/templates/Modal.module.scss"

type Props = {
  children: ReactNode;
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
  setModalOpened: (isModalOpened: boolean) => void;
  title: string;
  label?: string;
  handleClick?: () => void;
  type?: "button" | "submit" | "reset";
  errors?: FormikErrors<any>;
  touched?: FormikTouched<any>;
};

// モーダル
const Modal: React.FC<Props> = (props) => {
  const ref = useRef(null);

  useOutsideClickHandler(ref, props.setModalOpened);

  const [error, setError] = useState(null);
  useEffect(() => {
    if (
      props.errors &&
      props.touched &&
      Object.keys(props.errors).length > 0 &&
      Object.keys(props.touched).length > 0
    ) {
      props.setLoading(false);
      setError(props.errors);
    }
  }, [props.errors, props.touched]);

  return (
      <div className={styles.wrapper}>
        <Loading label="お待ちください" isLoading={props.isLoading} />
        <div className={styles.wrapperInner} ref={ref}>
          <header className={styles.header}>
            <div>
              <div className={styles.close}>
                <button
                  className={styles.closeButton}
                  onClick={() => {
                    props.setModalOpened(false);
                  }}
                >
                  <span className={styles.closeIcon}>
                    <CloseIcon />
                  </span>
                </button>
              </div>
            </div>

            <h2 className={styles.title}>{props.title}</h2>
          </header>
          {error && <Flash errors={error} />}
          <div className={styles.modalContent}>{props.children}</div>
          {props.handleClick && (
            <div className={styles.modalFooter}>
              <button
                className={styles.cancelButton}
                onClick={() => props.setModalOpened(false)}
              >
                キャンセル
              </button>
              <button
                type={props.type}
                className={styles.deleteButton}
                onClick={props.handleClick}
              >
                {props.label}
              </button>
            </div>
          )}
        </div>
      </div>
  );
};

export default Modal;
