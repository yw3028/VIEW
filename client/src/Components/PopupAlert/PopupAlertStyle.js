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
  box-shadow: ${(props) => `${props.theme.boxShadow.light}`};
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
  justify-content: space-between;
  width: 50%;
`;

export const Button = styled.button`
  border: none;
  width: 4rem;
  padding: 0.4rem 0.4rem;
  text-transform: uppercase;
  box-shadow: ${(props) => `${props.theme.boxShadow.strong}`};
  outline: none;

  &:hover {
    background: ${(props) =>
        (props.value === 'delete' && `${props.theme.colors.danger}`) ||
        (props.value === 'keep' && `${props.theme.colors.confirm}`)}
      radial-gradient(circle, transparent 1%, #919191 1%) center/15000%;
  }
`;
