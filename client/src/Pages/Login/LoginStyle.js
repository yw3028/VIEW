import styled from 'styled-components';

export const Login = styled.div`
  height: 100vh;
  background: white;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: url('https://www.ppt-backgrounds.net/uploads/lines-black-and-white-photo-templates.jpeg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;


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

  ul {
    list-style-type: none;
    padding: 0;
  }

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  li {
    margin: 0.5rem;
    font-size: 1.3rem;
    line-height: 2rem;
  }

  h4 {
    margin: 1rem;
    font-size: 1.5rem;
  }

  img {
    height: 100px;
    width: auto;
    border-radius: 10px;
    margin-bottom: 2.5rem;
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
    background: linear-gradient(270deg, white 0%, rgba(240,240,240,1) 100%);
    border-radius: 10px;
  }
`;
