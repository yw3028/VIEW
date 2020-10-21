import styled from 'styled-components';

export const Login = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('https://www.ppt-backgrounds.net/uploads/lines-black-and-white-photo-templates.jpeg')
    no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  padding-right: 3rem;
  padding-bottom: 3.5rem;

  h1 {
    flex: 1;
    font-size: 4rem;
    font-weight: 700;
    letter-spacing: 4px;
    font-family: 'Bebas Neue', cursive;
    text-align: right;
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-right: 30rem;

  img {
    height: 100px;
    width: auto;
    border-radius: 10px;
    margin-bottom: 2.5rem;
  }
`;
