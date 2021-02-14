import { Auth0Client } from "@auth0/auth0-spa-js";

export default (context, inject) => {
  // Auth0 クライアントの作成
  const auth0Client = new Auth0Client({
    domain: "dev-ic099zlk.jp.auth0.com",
    client_id: "4QJ9WFQWXSjmE6As2Fi2LG28bOhSKEll",
    redirect_uri: "http://localhost:3000",
    cacheLocation: "localstorage",
  });

  const login = () => {
    auth0Client.loginWithRedirect();
  };

  const loginPopup = () => {
    auth0Client.loginWithPopup();
  };

  const getToken = async () => {
    const isAuthenticated = await auth0Client.isAuthenticated();
    let accessToken = "";
    if (isAuthenticated) {
      const JWT = await auth0Client.getIdTokenClaims();
      const idToken = JWT.__raw;
      window.localStorage.setItem("idToken", idToken);
      accessToken = window.localStorage.getItem("idToken");
    }
    return accessToken;
  };

  const logout = async () => {
    auth0Client.logout();
  };

  const auth0 = {
    login,
    loginPopup,
    logout,
    getToken,
  };
  inject("auth0", auth0);
};
