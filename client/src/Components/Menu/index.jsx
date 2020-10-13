import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import './styles.scss';

export default () => {
  return (
    <div>
      <Menu>
        <div className="user">
          <h3>Santiago Ramon Cajal</h3>
          <p>santiagorarmon1934@gmail.com</p>
        </div>
        <a id="home" className="menu-item" href="/">
          Home
        </a>
        <a id="explore" className="menu-item" href="/about">
          Explore Movies
        </a>
        <a id="wishlist" className="menu-item" href="/contact">
          Wishlist
        </a>
        <a id="watched" className="menu-item" href="/contact">
          Watched list
        </a>
        <a id="journal" className="menu-item" href="/contact">
          Journal
        </a>
        <a id="friends" className="menu-item" href="/contact">
          Friends' movies
        </a>
      </Menu>
    </div>
  );
};
