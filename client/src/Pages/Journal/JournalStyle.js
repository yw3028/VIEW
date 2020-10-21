import styled from 'styled-components/macro';

export const JournalPage = styled.div`
  margin: 40px 8px;

  h2 {
    font-size: ${(props) => `${props.theme.fontSize.large}`};
    font-weight: ${(props) => `${props.theme.fontWeight.title}`};
    margin: 3rem;
    padding-left: 1rem;
    border-left: solid 8px #fcbf49;
  }
`;
