import Cookies from "js-cookie";
import { Auth } from "aws-amplify";

// 管理認証
export const adminAuthError = async (router) => {
  try {
    const session = await Auth.currentSession();
    Cookies.set(
      "jwtToken",
      session.getAccessToken().getJwtToken()
    );
    console.log(router)
    router.reload()
    // window.location.reload();
  } catch (err) {
    Cookies.remove("jwtToken");
    Auth.signOut();
    router.push("/signin");
  }

}

export const adminAuth = async (router, setAuth) => {
  try {
    const session = await Auth.currentSession();
    console.log(session)
    Cookies.set(
      "jwtToken",
      session.getAccessToken().getJwtToken()
    );
    setAuth(true)
  } catch (err) {
    Cookies.remove("jwtToken");
    Auth.signOut();
    router.push("/signin");
  }

}