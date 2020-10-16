import styled from 'styled-components/macro';

export const MovieTile = styled.div`
  display: inline-block;
  margin-right: 10px;
  position: relative;
  overflow-y: visible;

  &:hover .movie_overlay {
    opacity: 1;
  }

  .movie_img {
    width: 250px;
    @media screen and (min-device-width: 780px) {
      width: 300px;
    }
  }

  .movie_overlay {
    height: 100%;
    width: 100%;
    position: absolute;
    bottom: 0;
    opacity: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    transition: all 0.4s ease;
  }

  .movie_overlay_btn,
  .movie_overlay_btn:hover,
  .movie_overlay_btn:focus {
    background: none;
    color: white;
    outline: none;
    border: 4px solid white;
    border-radius: 50%;
    height: 50px;
    width: 50px;
    margin: 1rem 1rem;
    display: none;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 2rem;
    cursor: pointer;
  }

  &:hover .movie_overlay_btn,
  .movie_overlay_btn--active {
    display: flex;
  }
`;
