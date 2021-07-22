import "src/styles/global.scss";
import { useEnvironment } from "src/libs/RelayEnvironment";
import { RelayEnvironmentProvider } from "react-relay";
import { useState } from "react";
import { useRouter } from "next/router";
import { ScrollbarContext } from "src/libs/context";
import Amplify from "aws-amplify";
import { Auth } from "aws-amplify";

export default function App({ Component, pageProps }) {
  const environment = useEnvironment(pageProps.initialRecords);
  const router = useRouter();

  const params = {
    count: router.query.count ? Number(router.query.count) : 25,
    page: router.query.page ? Number(router.query.page) : 1,
    order: router.query.order ? router.query.order : "",
    keyword: router.query.keyword ? router.query.keyword : "",
  };
  const [scrollbar, setScrollbar] = useState(true);

  Amplify.configure({
    aws_project_region: process.env.NEXT_PUBLIC_AWS_PROJECT_REGION,
    aws_cognito_identity_pool_id:
      process.env.NEXT_PUBLIC_AWS_COGNITO_IDENTITY_POOL_ID,
    aws_cognito_region: process.env.NEXT_PUBLIC_AWS_COGNITO_REGION,
    aws_user_pools_id: process.env.NEXT_PUBLIC_AWS_USER_POOLS_ID,
    aws_user_pools_web_client_id:
      process.env.NEXT_PUBLIC_AWS_USER_POOLS_CLIENT_ID,
  });

  return (
    <>
      <RelayEnvironmentProvider environment={environment}>
        <ScrollbarContext.Provider
          value={{
            scrollbar: scrollbar,
            setScrollbar: setScrollbar,
          }}
        >
          <Component {...pageProps} params={params} />
        </ScrollbarContext.Provider>
      </RelayEnvironmentProvider>

      <style jsx global>{`
        body {
          overflow-y: ${scrollbar ? "scroll" : "hidden"};
        }
      `}</style>
    </>
  );
}
