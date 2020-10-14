import React from 'react';

import { NavLink } from 'react-router-dom';

import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import SearchIcon from '@material-ui/icons/Search';
import FavoriteIcon from '@material-ui/icons/Favorite';
import RemoveRedEyeIcon from '@material-ui/icons/RemoveRedEye';
import GroupIcon from '@material-ui/icons/Group';
import CreateIcon from '@material-ui/icons/Create';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';

import jhim from '../../assets/Jhim.png';

const drawerWidth = 280;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 1,
    position: 'relative',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  user: {
    padding: theme.spacing(2, 4),
  },
  list: {
    padding: theme.spacing(1, 2),
  },
  jhim: {
    width: '70%',
    margin: 'auto',
    position: 'absolute',
    bottom: '2rem',
    alignSelf: 'center',
  },
}));

export default ({ open, setOpen }) => {
  const classes = useStyles();
  const theme = useTheme();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <AppBar
        position="fixed"
        color="transparent"
        bottomOpacity="0.0"
        elevation="0.0"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </div>
        <div className={classes.user}>
          <AccountCircleIcon color="action" fontSize="large" />
          <Typography variant="h6">Santiago Ramon Cajal</Typography>
          <Typography variant="body2">santiagorarmon1934@gmail.com</Typography>
        </div>
        <Divider />
        <List className={classes.list}>
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
        <List className={classes.list}>
          <ListItem button key="Sign-off">
            <ListItemIcon>
              <PowerSettingsNewIcon />
            </ListItemIcon>
            <ListItemText secondary="Sign Off" />
          </ListItem>
        </List>
        <img className={classes.jhim} src={jhim} alt="jhim" />
      </Drawer>
    </div>
  );
};
