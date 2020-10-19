import styled from 'styled-components/macro';

export const JournalList = styled.div`
  display: flex;
  margin: 50px 0;
  overflow-x: auto;
  padding: 1.8rem 1rem;
  margin: 0 2rem;
  overflow-y: hidden;

  @media screen and (max-width: 780px) {
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }
`;
