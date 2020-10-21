import styled from 'styled-components/macro';

export const MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-weight: 300;

  @media screen and (min-device-width: 780px) {
    flex-direction: row;
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
  font-family: ${(props) => `${props.theme.fonts.header}`};
  font-weight: ${(props) => `${props.theme.fontWeight.title}`};
  font-size: ${(props) => `${props.theme.fontSize.large}`};
  line-height: 2.4rem;
  margin-bottom: 1rem;
  @media screen and (min-device-width: 1200px) {
    font-size: ${(props) => `${props.theme.fontSize.extraLarge}`};
    line-height: 3.6rem;
    margin: 1rem 0;
  }
`;

export const MovieInfo = styled.p`
  font-size: ${(props) => `${props.theme.fontSize.small}`};
  margin: 0.4rem 0;

  @media screen and (min-device-width: 1200px) {
    font-size: ${(props) => `${props.theme.fontSize.medium}`};
    margin: 0.8rem 0;
  }
`;

export const MoviePlot = styled.p`
  font-size: ${(props) => `${props.theme.fontSize.medium}`};
  margin: 0.6rem 0;
  line-height: 1.4rem;

  @media screen and (min-device-width: 1200px) {
    font-size: ${(props) => `${props.theme.fontSize.medium}`};
    margin: 1.5rem 0;
    line-height: 1.8rem;
  }
`;

export const DesktopLabels = styled.span`
  display: none;

  @media screen and (min-device-width: 1200px) {
    display: inline;
    font-weight: ${(props) => `${props.theme.fontWeight.regular}`};
  }
`;
