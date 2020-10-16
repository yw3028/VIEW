import styled from 'styled-components/macro';

export const JournalCard = styled.div`
  width: 270px;
  height: 270px;
  margin: 20px 40px 20px 0;
  box-shadow: 0 0 5px lightgray;
  position: relative;
`;

export const JournalDate = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10%;
  top: -10%;
  height: 3.5rem;
  width: 3.5rem;
  text-align: center;
  font-size: large;
  padding: 1px;
  background: #ffcb00;
  border-radius: 5px;
`;

export const JournalPreview = styled.div`
  background-color: #fafafa;
  padding: 50px 30px 20px 30px;
  height: 50px;

  p {
    font-size: small;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
`;
