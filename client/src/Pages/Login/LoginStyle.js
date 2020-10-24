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
  padding-bottom: 3.5rem;
  @media screen and (max-device-width: 780px) {
    display: block;
  }

  h1 {
    flex: 1;
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 4px;
    font-family: 'Bebas Neue', cursive;
    text-align: right;
    padding-bottom: 3.5rem;
    @media screen and (max-device-width: 780px) {
      font-size: 3.8rem;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      top: 210px;
      text-align: center;
    }

    p {
      font-size: 5rem;
      font-weight: 700;
      letter-spacing: 4px;
      font-family: 'Bebas Neue', cursive;
      text-align: right;
      margin-right: -20px;
      color: #ffffff;
      background-color: black;
      width: 50%;
      margin-left: 50%;
      @media screen and (max-device-width: 780px) {
        font-size: 3.8rem;
        text-align: center;
        margin: 0;
        padding-left: 1rem;
      }
    }
  }
`;

export const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-right: 20%;
  @media screen and (max-device-width: 780px) {
    padding-right: 0;
    display: block;
  }

  .google {
    @media screen and (max-device-width: 780px) {
      position: relative;
      top: 190px;
      height: 70px;
      display: flex;
      justify-content: center;
      width: 200px;
      margin-left: 90px;

      span {
        font-size: 1.6rem;
      }
    }
  }

  img {
    height: 100px;
    width: auto;
    border-radius: 10px;
    margin-bottom: 2.5rem;
    @media screen and (max-device-width: 780px) {
      margin-top: -600px;
      margin-bottom: 9.3rem;
      margin-left: 136px;
    }
  }
`;
