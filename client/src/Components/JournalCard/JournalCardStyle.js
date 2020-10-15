import styled from 'styled-components';

export const S_JournalCard = styled.div`
  width: 16rem;
  height: 16rem;
  margin: auto 40px auto 0;
  box-shadow: 0 0 5px lightgray;
  position: relative;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const S_JournalDate = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  left: 70%;
  top: -10%;
  height: 3.5rem;
  width: 3.5rem;
  text-align: center;
  font-size: large;
  padding: 2px;
  background: #ffcb00;
  border-radius: 5px;
`;

export const S_JournalPreview = styled.div`
  background-color: #fafafa;
  padding: 20px;
  height: 35%;
  p {
    font-size: small;
  }
`;
