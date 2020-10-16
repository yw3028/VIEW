import React from 'react';

import { NavLink } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import MenuIcon from '@material-ui/icons/Menu';
import HomeIcon from '@material-ui/icons/Home';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import GroupIcon from '@material-ui/icons/Group';
import CreateIcon from '@material-ui/icons/Create';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import jhim from '../../assets/Jhim.png';

const useStyles = makeStyles({
  menu: {
    position: 'relative',
  },
  list: {
    width: 300,
    padding: '1rem 0',
    display: 'flex',
    flexDirection: 'column',
  },
  user: {
    padding: '1rem 2rem',
  },
  listItems: {
    padding: '1rem 2rem',
  },
  jhim: {
    height: 'auto',
    maxHeight: '10rem',
    position: 'absolute',
    bottom: '1rem',
    alignSelf: 'center',
  },
});

export default () => {
  const classes = useStyles();
  const [state, setState] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState(open);
  };

  const list = () => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <div className={classes.user}>
        <AccountCircleIcon color="action" fontSize="large" />
        <Typography variant="h6">Santiago Ramon Cajal</Typography>
        <Typography variant="body2">santiagorarmon1934@gmail.com</Typography>
      </div>
      <Divider />
      <List className={classes.listItems}>
        <NavLink to="/home">
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText secondary="Home" />
          </ListItem>
        </NavLink>

        {/* <NavLink> */}
        <ListItem button key="Search">
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText secondary="Explore Movies" />
        </ListItem>
        {/* </NavLink> */}

        <NavLink to="/wishlist">
          <ListItem button key="Wishlist">
            <ListItemIcon>
              <FavoriteIcon />
            </ListItemIcon>
            <ListItemText secondary="Wishlist" />
          </ListItem>
        </NavLink>

        <NavLink to="/watched">
          <ListItem button key="Watched">
            <ListItemIcon>
              <RemoveRedEyeIcon />
            </ListItemIcon>
            <ListItemText secondary="Watched List" />
          </ListItem>
        </NavLink>

        <NavLink to="/journal">
          <ListItem button key="Journal">
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText secondary="Journal" />
          </ListItem>
        </NavLink>

        {/* <NavLink> */}
        <ListItem button key="Friend">
          <ListItemIcon>
            <GroupIcon />
          </ListItemIcon>
          <ListItemText secondary="Friends' Movies" />
        </ListItem>
        {/* </NavLink> */}
      </List>
      <Divider />
      <List className={classes.listItems}>
        <ListItem button key="Sign-off">
          <ListItemIcon>
            <PowerSettingsNewIcon />
          </ListItemIcon>
          <ListItemText secondary="Sign Off" />
        </ListItem>
      </List>
      <img className={classes.jhim} src={jhim} alt="jhim" />
    </div>
  );

  return (
    <div className={classes.menu}>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large"/>
        </Button>
        <SwipeableDrawer
          anchor="left"
          open={state}
          onClose={toggleDrawer(false)}
          onOpen={toggleDrawer(true)}
        >
          {list()}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
};
