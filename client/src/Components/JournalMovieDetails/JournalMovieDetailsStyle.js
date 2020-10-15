import styled from 'styled-components';

export const S_JournalMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  @media screen and (min-device-width: 780px) {
    align-items: center;
    width: 80%;
    margin: auto;
    padding-right: 1.5rem;
    border-right: 2px solid lightgray;
  }
  @media screen and (min-device-width: 1200px) {
    padding-right: 2rem;
  }
`;

export const S_Backdrop = styled.div`
  max-width: 100%;
  height: 30vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${({ bgImage }) => `url(${bgImage})`};
  @media screen and (min-device-width: 780px) {
    display: none;
  }
`;

export const S_DesktopPoster = styled.img`
  display: none;

  @media screen and (min-device-width: 780px) {
    display: inline;
    width: auto;
    height: 40vh;
    object-fit: contain;
    margin-right: 1.5rem;
  }

  @media screen and (min-device-width: 1200px) {
    width: auto;
    height: 50vh;
    object-fit: contain;
  }
`;

export const S_TextBox = styled.div`
  margin-top: 1.5rem;
`;

export const S_MovieTitle = styled.p`
  font-weight: 400;
  font-size: 1.2rem;
  line-height: 1.4rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const S_MovieInfo = styled.p`
  font-size: 0.8rem;
  text-align: center;
  color: #797979;
  margin: 0.4rem 0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid lightgray;

  @media screen and (min-device-width: 780px) {
    border-bottom: none;
  }

  @media screen and (min-device-width: 1200px) {
    font-size: 1.1rem;
    margin: 0.8rem 0;
  }
`;
