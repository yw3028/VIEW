import styled from 'styled-components/macro';

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  @media screen and (min-device-width: 780px) {
    flex-direction: row;
    align-items: center;
    width: 80%;
    margin: auto;
  }
`;

export const Backdrop = styled.div`
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

export const DesktopPoster = styled.img`
  display: none;

  @media screen and (min-device-width: 780px) {
    display: inline;
    width: auto;
    height: 40vh;
    object-fit: contain;
    margin-right: 2rem;
  }

  @media screen and (min-device-width: 1200px) {
    width: auto;
    height: 60vh;
    object-fit: contain;
  }
`;

export const TextBox = styled.div`
  padding: 1.5rem;
`;

export const MovieTitle = styled.p`
  font-weight: 600;
  font-size: 2rem;
  line-height: 2.4rem;
  margin-bottom: 1rem;
  @media screen and (min-device-width: 1200px) {
    font-size: 3rem;
    line-height: 3.6rem;
    margin: 1rem 0;
  }
`;

export const MovieInfo = styled.p`
  font-size: 0.9rem;
  margin: 0.4rem 0;

  @media screen and (min-device-width: 1200px) {
    font-size: 1.1rem;
    margin: 0.8rem 0;
  }
`;

export const MoviePlot = styled.p`
  font-size: 1.1rem;
  margin: 0.6rem 0;
  line-height: 1.4rem;

  @media screen and (min-device-width: 1200px) {
    font-size: 1.2rem;
    margin: 1rem 0;
    line-height: 1.8rem;
  }
`;

export const DesktopLabels = styled.span`
  display: none;

  @media screen and (min-device-width: 1200px) {
    display: inline;
  }
`;
