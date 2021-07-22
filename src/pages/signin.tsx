import { NextPage } from "next";
import Signin from "src/components/organisms/Signin";
import Head from "src/components/templates/Head";

const SigninPage: NextPage = () => {

  return (
    <>
      <Head
        title={`管理トップ｜虚空蔵管理テンプレート`}
        url={`https://admin.koqzo.com/signin`}
      />

      <main
        style={{
          width: "100%",
          height: "100vh",
          background: "#fafafa",
        }}
      >
        <Signin />
      </main>
    </>
  );
};

export default SigninPage;
