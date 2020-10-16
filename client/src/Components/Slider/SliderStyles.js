import styled from 'styled-components/macro';

export default styled.div`
  .list_scroll {
    overflow-x: auto;
    padding: 1.8rem 1rem;
    margin: 0 2rem;
    display: flex;
    overflow-y: hidden;
  }

  .list_title {
    font-size: 2.5rem;
    font-weight: 700;
    margin-top: 1rem;
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
