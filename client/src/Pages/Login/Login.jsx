import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';

import * as S from './LoginStyle';

const Login = ({ successGoogle, errorGoogle }) => {
  const initAxiosInterceptors = () => {
    axios.interceptors.request.use((config) => {
      const token = Cookies.get('token');
      if (token) {
        config.headers.authorization = `Bearer ${token}`;
      }
      return config;
    });
  };

  initAxiosInterceptors();

  return (
    <S.Login>
      <div className="container">
        <div className="square">popopo</div>
        <div className="left"></div>
        <div className="right">
          <GoogleLogin
            clientId="1023662076394-95opn7n5ukgfqoe51fmi7hdidd47bqio.apps.googleusercontent.com"
            buttonText="Login with Google"
            onSuccess={(response) => successGoogle(response)}
            onFailure={(response) => errorGoogle(response)}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
          />
        </div>
      </div>
    </S.Login>
  );
};

export default Login;
