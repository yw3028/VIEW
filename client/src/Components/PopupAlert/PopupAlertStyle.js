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
`;

export const Popup = styled.div`
  padding: 1rem;
  background-color: white;
  width: 300px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const PopupTitle = styled.p`
  margin-top: 0.4rem;
  font-size: 1.2rem;
  line-height: 1.8rem;
  font-weight: 300;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  margin-top: 1.2rem;
  justify-content: space-between;
  width: 50%;
`;
