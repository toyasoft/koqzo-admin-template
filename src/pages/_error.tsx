import { NextPage } from "next";
import Head from "next/head";
import Layout from "src/components/templates/Layout";
import Main from "src/components/templates/Main";

type Props = {
  statusCode: number;
};

const ErrorPage: NextPage<Props> = (props) => (
  <Layout>
    <Head>
      <title>{props.statusCode}エラー</title>
    </Head>
    <Main>エラーが発生しました</Main>
  </Layout>
);

export default ErrorPage;
