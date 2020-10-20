import styled from 'styled-components/macro';

export const Slider = styled.div`
  .list_scroll {
    overflow-x: auto;
    padding: 1.8rem 0rem;
    /* margin: 0 0 0 2rem; */
    display: flex;
    overflow-y: hidden;
    &:first-child {
      margin-left: 2rem;
    }
  }

  .list_title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 4rem;
    padding-left: 3rem;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    position: relative;
    display: block;
    padding: 0.7rem;
    transition: transform 500ms;

    &:first-child {
      margin-left: 2.8rem;
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
