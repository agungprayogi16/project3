/** @format */

import { GoogleOAuthProvider } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";

function GoogleLoginButton() {
  return (
    <GoogleOAuthProvider clientId='172469575220-id326umdh1f03mhu5o57truafb4hj2ej.apps.googleusercontent.com'>
      <GoogleLogin
        width={320}
        size='large'
        onSuccess={(credentialResponse) => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLoginButton;
