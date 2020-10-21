import React from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import GoogleLogin from 'react-google-login';
import viewImage from '../../assets/v-transparent.png';
import Fade from 'react-reveal/Fade';
import Gallereact from 'gallereact';

import * as S from './LoginStyle';

const imgs = [
  'https://m.media-amazon.com/images/M/MV5BZmE1NmVmN2EtMjZmZC00YzAyLWE4MWEtYjY5YmExMjUxODU1XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg',
  'https://lh3.googleusercontent.com/proxy/INhJO9y0560tj-7nE16NNQcFZc1xayORTRJKcrqfP-eaQ9tJ249EWgtjQdoJudkjxr79Tuq0r0yWH5zJa1f7f1aiSmUl8y2qTIi95fgzH_i_z9XWzDq888KlzlPiifBA',
  'https://m.media-amazon.com/images/M/MV5BY2I5NzM3Y2QtNGY4NS00Njg5LWI2OGYtZDhlN2UzOWJjMDUxXkEyXkFqcGdeQXVyODE0OTU5Nzg@._V1_.jpg',
  'https://checalamovie.net/wp-content/uploads/2020/07/CHS_KEY_KA_27x40_AmazonFilms_DATED_415_F3.png',
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
      <S.Login>
        <div className="container">
          <div className="poster">
            <Gallereact
              images={imgs}
              displayDot={false}
              transition={false}
              displayArrows={false}
              autoPlay={true}
            />
          </div>
          <div className="signup">
            <div className="left">
              <h1>A new way to enjoy movies:</h1>
              <ul>
                <li>- Track what you watch</li>
                <li>- Add movies to your wishlist</li>
                <li>- Journal about it</li>
                <li>- Check your friend's taste</li>
                <li>- Find common movies to watch</li>
              </ul>
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
