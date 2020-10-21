import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';
import viewImage from '../../assets/v-transparent.png';
import Fade from 'react-reveal/Fade';
import Typical from 'react-typical';

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

  const steps = [
    'Track what you watch',
    1000,
    'Add movies to your wishlist',
    1000,
    'Journal about it',
    1000,
  ];

  return (
    <Fade>
      <S.Login>
        <div className="container">
          <div className="signup">
            <div className="left">
              <h1>A new way to enjoy movies:</h1>
              <Typical steps={steps} loop={Infinity} wrapper="p" />
              {/* <ul>
                <li>Track what you watch</li>
                <li>Add movies to your wishlist</li>
                <li>Journal about it</li>
                <li>Check your friend's taste</li>
                <li>Find common movies to watch</li>
              </ul> */}
            </div>
            <div className="right box">
              <img src={viewImage} alt="view-img" />
              <h4>Sign in to View</h4>
              <GoogleLogin
                clientId="1023662076394-95opn7n5ukgfqoe51fmi7hdidd47bqio.apps.googleusercontent.com"
                buttonText="Sign in with Google"
                onSuccess={(response) => successGoogle(response)}
                onFailure={(response) => errorGoogle(response)}
                cookiePolicy={'single_host_origin'}
                // isSignedIn={true}
              />
            </div>
          </div>
        </div>
      </S.Login>
    </Fade>
  );
};

export default Login;
