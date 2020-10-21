import styled from 'styled-components/macro';

export const HeadBar = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;
  align-items: center;
  height: 55px;
  position: -webkit-sticky;
  position: sticky;
  top: -1px;
  z-index: 100;
  box-shadow: ${(props) => `${props.theme.boxShadow.strong}`};
  background-color: ${(props) => `${props.theme.colors.primaryColor}`};
`;

export const Logo = styled.p`
  font-family: 'Monoton', cursive;
  font-size: 36px;
  letter-spacing: 3px;
  margin-left: 10rem;
`;
