import styled from 'styled-components/macro';

export const JournalCard = styled.div`
  width: 270px;
  height: 270px;
  margin: 20px 40px 20px 0;
  position: relative;
  box-shadow: ${(props) => `${props.theme.boxShadow.light}`};
  color: ${(props) => `${props.theme.colors.textBody}`};
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
  font-size: ${(props) => `${props.theme.fontSize.medium}`};
  padding: 1px;
  background: ${(props) => `${props.theme.colors.secondaryColor}`};
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
    font-size: ${(props) => `${props.theme.fontSize.medium}`};
    font-weight: ${(props) => `${props.theme.fontWeight.bold}`};
  }

  p {
    font-size: ${(props) => `${props.theme.fontSize.small}`};
  }
`;

export const MovieImg = styled.img`
  width: 100%;
`;
