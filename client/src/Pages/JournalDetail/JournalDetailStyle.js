import styled from 'styled-components/macro';

export const PageContainer = styled.div`
  @media screen and (min-device-width: 780px) {
    width: 90%;
    margin: auto;
  }

  @media screen and (min-device-width: 1200px) {
    margin: auto;
  }
`;

export const TopIcons = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 100%;
  z-index: 1;

  @media screen and (min-device-width: 780px) {
    position: static;
    margin-top: 10vh;
  }
`;

export const MovieAndJournalContainer = styled.div`
  @media screen and (min-device-width: 780px) {
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
    height: 75vh;
  }
`;

export const MovieDetailsContainer = styled.div`
  @media screen and (min-device-width: 780px) {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 50vh;
  }
`;
