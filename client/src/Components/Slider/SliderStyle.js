import styled from 'styled-components/macro';

export const Slider = styled.div`
  .list_scroll {
    overflow-x: auto;
    padding-top: 1.8rem;
    display: flex;
    overflow-y: hidden;
    &:first-child {
      margin-left: 2rem;
    }
  }

  .list_title {
    margin-left: 3rem;
    padding-left: 1rem;
    border-left: solid 8px #fcbf49;
    margin-top: 1rem;
    font-size: ${(props) => `${props.theme.fontSize.extraLarge}`};
    font-weight: ${(props) => `${props.theme.fontWeight.title}`};
    font-family: ${(props) => `${props.theme.fonts.header}`};
    letter-spacing: 4px;
    line-height: 2.8rem;
  
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    position: relative;
    width: 150px;
    height: 280px;
    display: block;
    margin: 5px;
    transition: transform 500ms;
    &:first-child {
      margin-left: 3.2rem;
    }
  }

  .list_scroll .item,
  .list_scroll:hover .item {
    transform: translateX(-5%);
  }

  .item:hover ~ .item {
    transform: translateX(5%);
  }

  .list_scroll .item:hover {
    transform: scale(1.1);
    z-index: 1;
  }

  .item {
    /* display: block; */
    max-width: 100%;
  }
`;
