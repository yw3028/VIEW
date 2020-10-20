import React from 'react';

import { NavLink } from 'react-router-dom';
import { GoogleLogout } from 'react-google-login';

import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
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
import zIndex from '@material-ui/core/styles/zIndex';

const useStyles = makeStyles({
  icon: {
    background: 'white',
    height: '30px',
    width: '30px',
    borderRadius: '50%',
    margin: '2rem 2rem',
    padding: '1rem',
  },
  menu: {
    position: '-webkit-sticky',
    position: 'sticky',
    top: '-1px',
    margin: '0 1rem',
    left: '10px',
    zIndex: 100,
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

export default ({ user, setIsAuth }) => {
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
        {user.image ? (
          <Avatar alt={user.name} src={user.image} />
        ) : (
          <AccountCircleIcon color="action" fontSize="large" />
        )}
        <Typography variant="h6">
          {user.firstName} {user.lastName}
        </Typography>
        <Typography variant="body2">{user.email}</Typography>
      </div>
      <Divider />
      <List className={classes.listItems}>
        <NavLink to="/">
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText secondary="Home" />
          </ListItem>
        </NavLink>

        <NavLink to="/explore">
          <ListItem button key="Search">
            <ListItemIcon>
              <SearchIcon />
            </ListItemIcon>
            <ListItemText secondary="Explore Movies" />
          </ListItem>
        </NavLink>

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
          <GoogleLogout
            tag="div"
            type="div"
            icon={false}
            key="Sign-off"
            render={(renderProps) => (
              <div
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                style={{
                  fontSize: '0.875rem',
                  fontFamily: 'Roboto',
                  fontWeight: 400,
                  lineHeight: 1.43,
                  color: 'rgba(0, 0, 0, 0.54)',
                  letterSpacing: '0.01071em',
                  cursor: 'pointer',
                }}
              >
                Sign off
              </div>
            )}
            clientId="1023662076394-95opn7n5ukgfqoe51fmi7hdidd47bqio.apps.googleusercontent.com"
            onLogoutSuccess={() => {
              setIsAuth(false);
            }}
          ></GoogleLogout>
        </ListItem>
      </List>
      <img className={classes.jhim} src={jhim} alt="jhim" />
    </div>
  );

  return (
    <div className={classes.menu}>
      <React.Fragment key="left">
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon fontSize="large" className={classes.icon} />
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
