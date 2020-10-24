import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';
import viewImage from '../../assets/v-transparent.png';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical';

import * as S from './LoginStyle';

const steps = [
  'watch',
  1000,
  'share',
  1000,
  'enjoy',
  1000,
  'track',
  1000,
  'Journal',
  1000,
  'view',
  1000,
];

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
    <Fade>
      <S.Login steps={steps}>
        <h1>
          A new way to <Typical steps={steps} wrapper="p" />
          movies
        </h1>
        <S.Right>
          <img src={viewImage} alt="view-img" />
          <GoogleLogin
            className="google"
            clientId="1023662076394-95opn7n5ukgfqoe51fmi7hdidd47bqio.apps.googleusercontent.com"
            buttonText={
              window.screen.width > 780 ? 'Sign in with Google' : 'Sign in'
            }
            onSuccess={(response) => successGoogle(response)}
            onFailure={(response) => errorGoogle(response)}
            cookiePolicy={'single_host_origin'}
            // isSignedIn={true}
          />
        </S.Right>
      </S.Login>
    </Fade>
  );
};

export default Login;
