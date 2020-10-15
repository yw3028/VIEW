import styled from 'styled-components';

export default styled.div`
  .list_scroll {
    overflow-x: auto;
    padding: 2rem 1rem;
    margin: 0 2rem;
    display: flex;
    overflow-y: hidden;
  }

  .list_title {
    font-size: 1.6em;
    font-weight: 500;
    margin-bottom: 0.5rem;
    margin-top: 3rem;
    padding-left: 5vw;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  .item {
    position: relative;
    display: block;
    flex: 1 1 0px;
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
