import React from 'react';
import axios from 'axios';
import GoogleLogin from 'react-google-login';

import { getWishlist } from '../../Services/apiClient';

import * as S from './LoginStyle';

const responseSuccessGoogle = (response) => {
  console.log(response);
  axios({
    method: 'POST',
    url: 'http://localhost:3001/googlelogin',
    data: { tokenId: response.tokenId },
  }).then((response) => {
    console.log('Google succes', response);
  });
};

// Save the token as a cookie from the response
// Save user in frontend (state)
// Extract token from cookie (library)
// In each req that requires user logged send token
// if not logged (invalid or expired) show login page, else show component

const doThis = () => {
  getWishlist().then((movies) => console.log(movies));
};

const responseErrorGoogle = (response) => {};

const Login = () => {
  return (
    <div className="container">
      <div className="left">
        <button onClick={doThis}>Click me!</button>
      </div>
      <div className="right">
        <GoogleLogin
          clientId="1023662076394-95opn7n5ukgfqoe51fmi7hdidd47bqio.apps.googleusercontent.com"
          buttonText="Login with Google"
          onSuccess={responseSuccessGoogle}
          onFailure={responseErrorGoogle}
          cookiePolicy={'single_host_origin'}
        />
      </div>
    </div>
  );
};

export default Login;
