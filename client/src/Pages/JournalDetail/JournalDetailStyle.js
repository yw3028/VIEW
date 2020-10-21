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
    background: white;
    border-radius: 20px;
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
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
