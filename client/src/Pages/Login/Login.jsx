import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';

import { getWishlist } from '../../Services/apiClient';

// import * as S from './LoginStyle';

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

const Login = ({ user, setUser, loadingUser, setLoadingUser }) => {
  const responseSuccessGoogle = (response) => {
    axios({
      method: 'POST',
      url: 'http://localhost:3001/googlelogin',
      data: { tokenId: response.tokenId },
    })
      .then((response) => {
        console.log('Google succes', response);
        Cookies.set('token', response.data.token, {
          expires: 30,
          sameSite: 'none',
        });
        setUser(response.data.user[0]);
      })
      .catch((error) => console.log(error));
  };

  // const responseErrorGoogle = (response) => {};

  return (
    <div className="container">
      <div className="left"></div>
      <div className="right">
        <GoogleLogin
          clientId="1023662076394-95opn7n5ukgfqoe51fmi7hdidd47bqio.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          // onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default Login;
