import styled from 'styled-components';

export const Login = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid red;
  background: url('https://www.ppt-backgrounds.net/uploads/lines-black-and-white-photo-templates.jpeg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

  .container {
    display: flex;
  }

  .signup {
    font-family: 'Roboto';
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* height: 100vh; */
    padding: 2rem;
  }
  .poster {
    height: 100vh;
    width: 33vw;
    /* margin: 0 3rem 4rem 3rem; */
    padding: 0;
    display: none;
    /* @media screen and (min-device-width: 780px) {
      display: block;
    } */
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 0.5rem;
    font-size: 1.3rem;
  }

  img {
    height: 100px;
    width: auto;
    border-radius: 10px;
  }

  .left,
  .right {
    margin: 3rem;
    padding: 1rem;
  }

  .right {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0;
  }

  .left {
    margin-left: 0;
  }
  .box {
    box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
      0 6.7px 5.3px rgba(0, 0, 0, 0.048), 0 12.5px 10px rgba(0, 0, 0, 0.06),
      0 22.3px 17.9px rgba(0, 0, 0, 0.072), 0 41.8px 33.4px rgba(0, 0, 0, 0.086),
      0 100px 80px rgba(0, 0, 0, 0.12);
    height: 250px;
    width: 300px;
    background: white;
    border-radius: 5px;
  }
`;
