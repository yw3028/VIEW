import styled from 'styled-components/macro';

export const JournalCard = styled.div`
  width: 270px;
  height: 270px;
  margin: 20px 40px 20px 0;
  box-shadow: 0 0 5px lightgray;
  position: relative;
  color: black;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const JournalDate = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  right: 10%;
  top: -11%;
  height: 3.5rem;
  width: 3.5rem;
  text-align: center;
  font-size: large;
  padding: 1px;
  background: #ffcb00;
  border-radius: 5px;
  line-height: 20px;

  div {
    padding: 5px;
  }
`;

export const JournalPreview = styled.div`
  background-color: #fafafa;
  padding: 30px;
  height: 50px;

  h4 {
    margin: 10px 0;
    font-size: medium;
    font-weight: 500;
  }

  p {
    font-size: small;
  }
`;

export const MovieImg = styled.img`
  width: 100%;
`;
