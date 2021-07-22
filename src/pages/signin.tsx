import { NextPage } from "next";
import { initEnvironment } from "src/libs/RelayEnvironment";
import { QueryRenderer } from "react-relay";
// import SigninPage_signinQuery from "src/queries/SigninPage";
import Signin from "src/components/organisms/Signin";
import Head from "src/components/templates/Head";
import { useRouter } from "next/router";
import Layout from "src/components/templates/Layout";
import Menu from "src/components/templates/Menu";
// import UserList from "src/components/organisms/user/UserList";
import Main from "src/components/templates/Main";
import Breadcrumbs from "src/components/molecules/Breadcrumbs";
import { Auth } from "aws-amplify";

// const getAccessJwtToken = async () => {
//   // Auth.currentSession() checks if token is expired and refreshes with Cognito if needed automatically
//   const session = await Auth.currentSession();
//   return await session.getAccessToken().getJwtToken();
// };

const SigninPage: NextPage = () => {
  const environment = initEnvironment({});
  const router = useRouter();
  // const [session, loading] = useSession();
  // console.log(session);
  // console.log(getAccessJwtToken())
  Auth.currentSession().then((response) => {
    console.log(response)
  })


  return (
    <>
      <Head
        title={`管理トップ｜モノノベ管理`}
        description={`こちらの管理画面はモノノベ管理にてホスティングされています。`}
        url={`https://admin.mononobe.com`}
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
