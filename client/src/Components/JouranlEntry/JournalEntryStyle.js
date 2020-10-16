import styled from 'styled-components/macro';

export const JournalEntryContainer = styled.div`
  /* border: 1px solid blue; */
  padding-left: 1.5rem;
  font-family: 'Roboto';
  line-height: 1.5rem;
  height: 60vh;
  /* float: right; */
  background-color: white;
  padding: 0 1.5rem;
`;

export const DateWeatherContainer = styled.div`
  /* border: 1px solid red; */
  display: flex;
  justify-content: center;
  font-size: 0.9rem;

  @media screen and (max-device-width: 340px) {
    flex-direction: column;
    /* align-content: flex-end; */
  }

  @media screen and (min-device-width: 780px) {
    flex-direction: column;
    /* align-content: flex-end; */
  }
`;

export const MobileLabel = styled.div`
  @media screen and (min-device-width: 780px) {
    display: none;
  }
`;

export const JournalTitle = styled.textarea`
  font-size: 1.5rem;
  font-weight: 500;
  border: none;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  margin-top: 1.5rem;
  resize: none;

  @media screen and (min-device-width: 780px) {
    padding-right: 1.5rem;
    height: 2rem;
  }
`;

export const JournalContent = styled.textarea`
  font-size: 1rem;
  line-height: 1.5rem;
  font-weight: 300;
  border: none;
  font-family: 'Roboto', sans-serif;
  width: 100%;
  height: 100%;
  resize: none;

  @media screen and (min-device-width: 780px) {
    padding-right: 1.5rem;
    width: 40vw;
    height: 45vh;
    ::-webkit-scrollbar {
      width: 0.3rem;
      background-color: #ffffff;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
      background-color: #d9d9d9;
    }
  }
`;
