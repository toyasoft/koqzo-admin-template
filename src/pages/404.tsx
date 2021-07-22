import { NextPage } from "next";
import Layout from "src/components/templates/Layout";
import Head from "src/components/templates/Head";
import Main from "src/components/templates/Main";
import Error from "src/components/templates/Error";


type Props = {};

const Error404Page: NextPage<Props> = (props) => {
  return (
    <Layout>
      <Head
        title="ページが見つかりません｜mononobe - モノノベ"
        description=""
        url="https://www.mononobe.com"
      />
      <Main>
        <Error />
      </Main>
    </Layout>
  );
};

export default Error404Page;
