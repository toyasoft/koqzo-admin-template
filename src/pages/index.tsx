import { NextPage } from "next";
import { useState } from "react";
import { initEnvironment } from "src/libs/RelayEnvironment";
// import { QueryRenderer } from "react-relay";
// import IndexPage_indexQuery from "src/queries/IndexPage";
import { useRouter } from "next/router";
import Head from "src/components/templates/Head";
import Layout from "src/components/templates/Layout";
import Menu from "src/components/templates/Menu";
import Main from "src/components/templates/Main";
import ContentHeader from "src/components/templates/ContentHeader";
import Breadcrumbs from "src/components/templates/Breadcrumbs";
import WebsiteDetail from "src/components/organisms/WebsiteDetail";
import ContentList from "src/components/organisms/ContentList";
import { useEffect } from "react";
import { adminAuth } from "src/libs/error";

type Props = {
  params: {
    count: number;
    page: number;
    order: string;
    keyword: string;
  };
};

const IndexPage: NextPage<Props> = ({ params }) => {
  const environment = initEnvironment({});
  const [isCreateOpened, setCreateOpened] = useState(false);
  const router = useRouter();
  const [isAuth, setAuth] = useState(false);

  useEffect(() => {
    setAuth(true)
  },[])
  // const [session, loading] = useSession();

  // useEffect(() => {
  //   if (loading) return;
  //   if (!session) router.push("/signin");
  // }, [loading, session]);
  // useEffect(() => {
  //   adminAuth(router, setAuth);
  // }, []);

  return (
    <>
      <Head
        title={`管理トップ｜虚空蔵管理テンプレート`}
        description={`こちらの管理画面はモノノベ管理にてホスティングされています。`}
        url={`https://admin.mononobe.com`}
      />
      <Layout>
        <Menu />
        <Main>
          {isAuth ? (
            <>
              <Breadcrumbs
                items={[
                  {
                    name: "管理ホーム",
                  },
                ]}
              />
              <ContentHeader title="管理ホーム" action={false} />
              <WebsiteDetail />
              <ContentList />
            </>
          ) : (
            <p>読み込み中</p>
          )}
        </Main>
      </Layout>
    </>
  );
};

export default IndexPage;
