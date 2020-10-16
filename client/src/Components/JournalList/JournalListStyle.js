import styled from 'styled-components/macro';

export const JournalList = styled.div`
  display: flex;
  margin: 50px 0;

  @media screen and (max-width: 780px) {
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
`;
