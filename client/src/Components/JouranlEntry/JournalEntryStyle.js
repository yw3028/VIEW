import styled from 'styled-components/macro';

export const JournalEntryContainer = styled.div`
  margin-left: 2rem;
  padding-left: 1.5rem;
  line-height: 1.5rem;
  height: 60vh;
  padding: 0 1.5rem;
  font-family: ${(props) => `${props.theme.fonts.body}`};
`;

export const DateWeatherContainer = styled.div`
  display: flex;
  justify-content: center;
  font-size: ${(props) => `${props.theme.fontSize.small}`};

  @media screen and (max-device-width: 340px) {
    flex-direction: column;
  }

  @media screen and (min-device-width: 780px) {
    flex-direction: column;
  }
`;

export const MobileLabel = styled.div`
  @media screen and (min-device-width: 780px) {
    display: none;
  }
`;

export const JournalTitle = styled.textarea`
  font-family: ${(props) => `${props.theme.fonts.header}`};
  font-weight: ${(props) => `${props.theme.fontWeight.title}`};
  font-size: ${(props) => `${props.theme.fontSize.large}`};
  border: none;
  width: 80%;
  margin-top: 1.5rem;
  resize: none;
  background: ${(props) => `${props.theme.colors.background}`};
  outline: none;


  @media screen and (min-device-width: 780px) {
    border-bottom: 1px dotted lightgray;
    background: ${(props) => `${props.theme.colors.white}`};
    padding-right: 1.5rem;
    height: 3rem;
  }
`;

export const JournalContent = styled.textarea`
  font-family: ${(props) => `${props.theme.fonts.body}`};
  font-weight: ${(props) => `${props.theme.fontWeight.extraLight}`};
  font-size: ${(props) => `${props.theme.fontSize.medium}`};
  line-height: 1.5rem;
  margin-top: 1.5rem;
  border: none;
  width: 100%;
  height: 100%;
  resize: none;
  background: ${(props) => `${props.theme.colors.background}`};
  outline: none;

  @media screen and (min-device-width: 780px) {
    background: ${(props) => `${props.theme.colors.white}`};
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
