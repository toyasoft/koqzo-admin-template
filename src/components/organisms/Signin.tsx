import styles from "src/styles/components/organisms/Signin.module.scss";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import * as Yup from "yup";
import { useFormik } from "formik";
import { Auth } from "aws-amplify";

type Props = {};

// 管理者ログイン
const AdminSignin: React.FC<Props> = (props) => {
  const router = useRouter();
  const [isUnauthed, setUnauthed] = useState(false);
  const [isLoading, setLoading] = useState(false);

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("入力してください"),
    password: Yup.string().required("入力してください"),
  });

  const initialValues = {
    username: "",
    password: "",
  };

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: async (values, actions) => {
      setLoading(true);
      Auth.signIn(values.username, values.password)
        .then((user) => {
          router.push("/");
          console.log(user);
          Cookies.set("jwtToken", user.signInUserSession.idToken.jwtToken);
        })
        .catch((err) => {
          console.log(err);
          setUnauthed(true)
          setLoading(false);
        });
    },
  });

  return (
    <div className={styles.signin}>
      <div className={styles.tableRow}>
        <div className={styles.tableCell}>
          <section className={styles.loginModal}>
            <h1>虚空蔵管理テンプレート</h1>
            {isUnauthed && <p>ログインできません</p>}
            <form onSubmit={formik.handleSubmit}>
              <div className={styles.field}>
                <label>{!formik.values.username && "アカウント"}</label>
              
                <input
                  type="text"
                  name="username"
                  value={formik.values.username}
                  onChange={formik.handleChange}
                />
              </div>
              <div className={styles.field}>
                <label>{!formik.values.password && "パスワード"}</label>
                <input
                  type="password"
                  name="password"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                />
              </div>
              <div className={styles.submit}>
                <button type="submit">
                  {isLoading ? "ログイン中" : "ログイン"}
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdminSignin;
