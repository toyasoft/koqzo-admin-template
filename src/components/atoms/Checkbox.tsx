import { FormikValues } from "formik";
import React, { MutableRefObject } from "react";
import styles from "src/styles/components/atoms/Checkbox.module.scss";

type Props = {
  formik: FormikValues;
  name: string;
  firstRef: MutableRefObject<any>;
  setHover: (isHover: boolean) => void;
  fieldLabel: string;
  isHover: boolean;
};

// チェックボックス
const Checkbox: React.FC<Props> = React.memo(
  ({ formik, name, firstRef, isHover, setHover, fieldLabel }) => (
    <label
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className={`${styles.label} ${isHover ? styles.hover : ""}`}
    >
      <span
        className={`${styles.checkbox} ${
          formik.values[name] && styles.selected
        } ${isHover ? styles.hover : ""}`}
      >
        <input
          ref={firstRef}
          type="checkbox"
          name={name}
          checked={formik.values[name]}
          onChange={formik.handleChange}
        />
        {formik.values[name] && (
          <svg role="img" viewBox="-2 -2 15 12" height="16" width="16">
            <path
              d="M10.7176 1.69648L4.17652 8.4358L0.282471 4.42375L1.71763 3.0308L4.17652 5.5642L9.28247 0.303528L10.7176 1.69648Z"
              fill="#FFFFFF"
            ></path>
          </svg>
        )}
      </span>

      <span className={styles.fieldLabel}>{fieldLabel}</span>
    </label>
  ),
  (prevProps, nextProps) =>
    prevProps.formik.values[prevProps.name] ===
      nextProps.formik.values[nextProps.name] &&
    prevProps.isHover === nextProps.isHover
);

export default Checkbox;
