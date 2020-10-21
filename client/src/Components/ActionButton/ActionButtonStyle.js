import styled from 'styled-components/macro';

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
  color: red;
  max-height: 48px;

  @media screen and (min-device-width: 780px) {
    width: 200px;
  }
`;

export const ActionButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  border: none;
  color: ${(props) => props.color};
  background-color: transparent;
  cursor: pointer;

  @media screen and (min-device-width: 780px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const IconShape = styled.div`
  @media screen and (min-device-width: 780px) {
    background-color: ${(props) => props.circular && 'white'};
    padding: ${(props) => props.circular && '0.8rem'};
    border-radius: ${(props) => props.circular && '50%'};
    box-shadow: ${(props) =>
      props.circular && `${props.theme.boxShadow.button}`};
    ${ActionButton}:hover & {
      background-color: ${(props) => props.circular && 'darkgray'};
    }
  }
`;

export const IconText = styled.div`
  color: ${(props) => `${props.theme.colors.textBody}`};
  font-size: ${(props) => `${props.theme.fontSize.small}`};
  font-size: 0.8rem;
  margin-top: 0.3rem;
  @media screen and (min-device-width: 780px) {
    display: none;
    ${ActionButton}:hover & {
      display: inline;
    }
  }
`;
