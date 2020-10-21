import styled from 'styled-components/macro';

export const JournalMovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: ${(props) => `${props.theme.fonts.header}`};
  font-weight: ${(props) => `${props.theme.fontWeight.light}`};

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
    margin-right: 1.5rem;
  }

  @media screen and (min-device-width: 1200px) {
    width: auto;
    height: 50vh;
    object-fit: contain;
  }
`;

export const TextBox = styled.div`
  margin-top: 1.5rem;
`;

export const MovieTitle = styled.p`
  font-size: ${(props) => `${props.theme.fontSize.medium}`};
  font-weight: ${(props) => `${props.theme.fontWeight.regular}`};
  line-height: 1.4rem;
  text-align: center;
  margin-bottom: 1rem;
`;

export const MovieInfo = styled.p`
  font-size: ${(props) => `${props.theme.fontSize.small}`};
  text-align: center;
  color: ${(props) => `${props.theme.colors.mediumGrey}`};
  margin: 0.4rem 0;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 2px solid lightgray;

  @media screen and (min-device-width: 780px) {
    border-bottom: none;
  }

  @media screen and (min-device-width: 1200px) {
    font-size: ${(props) => `${props.theme.fontSize.medium}`};
    margin: 0.8rem 0;
  }
`;
