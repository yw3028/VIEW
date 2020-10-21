import styled from 'styled-components/macro';

export const Buttons = styled.div``;

export const MovieTile = styled.div`
  display: flex;
  margin-right: 10px;
  position: relative;
  overflow-y: visible;

  &:hover .movie_overlay {
    opacity: 1;
  }

  &:hover .movie_img {
    filter: brightness(70%);
  }

  .movie_img {
    border-radius: 5px;
    width: 150px;
    }
  }

  .movie_overlay {
    width: 100%;
    position: absolute;
    opacity: 0;
    display: flex;
    align-self: center;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    transition: all 0.4s ease;
    border-radius: 10px;
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
