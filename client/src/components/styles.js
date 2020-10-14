import styled from 'styled-components';

export const S_MovieDetails = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;

  @media screen and (min-device-width: 680px) {
    width: 33%;
  }

  @media screen and (min-device-width: 1200px) {
    flex-direction: row;
    width: 60%;
    margin: auto;
  }
`;
