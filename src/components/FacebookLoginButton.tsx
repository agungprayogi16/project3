/** @format */
import React from "react";
import FacebookLogin, { ReactFacebookLoginInfo } from "react-facebook-login";

type FacebookLoginButtonProps = {
  onLogin: (response: ReactFacebookLoginInfo) => void;
};

const FacebookLoginButton: React.FC<FacebookLoginButtonProps> = ({
  onLogin,
}) => {
  const appId = " 207265539143008"; // Ganti dengan App ID Facebook Anda

  const responseFacebook = (response: ReactFacebookLoginInfo) => {
    onLogin(response);
  };

  return (
    <FacebookLogin
      appId={appId}
      autoLoad={false}
      fields='name,email,picture'
      callback={responseFacebook}
    />
  );
};

export default FacebookLoginButton;
