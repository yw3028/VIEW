import styled from 'styled-components/macro';

export const ShowPopup = styled.div`
  display: ${(props) => props.displayPopup};
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.15);
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  font-family: ${(props) => `${props.theme.fonts.header}`};
`;

export const Popup = styled.div`
  padding: 1rem;
  background-color: white;
  width: 300px;
  border-radius: 15px;
  box-shadow: ${(props) => `${props.theme.boxShadow.strong}`};

  @media screen and (min-device-width: 780px) {
    width: 400px;
    height: 120px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
  }
`;

export const PopupTitle = styled.p`
  margin-top: 0.4rem;
  line-height: 1.8rem;
  font-size: ${(props) => `${props.theme.fontSize.medium}`};
  font-weight: ${(props) => `${props.theme.fontWeight.light}`};
`;

export const ButtonsDiv = styled.div`
  display: flex;
  margin-top: 1.2rem;
  justify-content: center;
  align-items: center;
  font-size: ${(props) => `${props.theme.fontSize.medium}`};
`;

export const Button = styled.button`
  width: 5rem;
  padding: 0.8rem 0.8rem;
  margin: 0 1.5rem;
  text-transform: uppercase;
  border-radius: 5px;
  box-shadow: ${(props) => `${props.theme.boxShadow.light}`};
  outline: none;
  border: none;
  font-weight: ${(props) => `${props.theme.fontWeight.title}`};
  color: ${(props) =>
    (props.value === 'delete' && `${props.theme.colors.danger}`) ||
    (props.value === 'keep' && `${props.theme.colors.confirm}`)};

  &:hover {
    color: white;
    background: ${(props) =>
        (props.value === 'delete' && `${props.theme.colors.danger}`) ||
        (props.value === 'keep' && `${props.theme.colors.confirm}`)}
      radial-gradient(circle, transparent 1%, #919191 1%) center/15000%;
  }
`;
