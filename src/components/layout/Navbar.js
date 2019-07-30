import React, { Fragment, useContext } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appBar: {
    background: 'rgba(0,0,0,0.3) !important',
    opacity: '0.9',
    position: 'relative',
    marginBottom: '20px'
  },

  menuButton: {
    float: 'right',
    top: '2px',
    right: '10px'
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  },
  drawerColorText: {
    color: '#31949E',
    [theme.breakpoints.up('xs')]: {
      fontSize: '20px',
      fontWeight: 'bold'
    }
  },
  spanMarginLeft: {
    marginLeft: '20px'
  },
  hidenNav: {
    [theme.breakpoints.down('xs')]: {
      display: 'none',
      float: 'right',
      position: 'relative',
      textAling: 'right',
      alignItems: 'right'
    }
  },
  hiddenHamFlex: {
    [theme.breakpoints.down('lg')]: {
      float: 'left',
      flex: 'auto'
    }
  },
  navbarLinks: {
    color: 'white',
    marginRight: '40px',

    float: 'right'
  },
  middleBar: {
    [theme.breakpoints.down('sm')]: {
      left: '32% !important'
    }
  }
}));

const ResponsiveDrawer = props => {
  const { container } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  function handleDrawerToggle() {
    setMobileOpen(!mobileOpen);
  }

  const guestLinksDraw = (
    <Fragment>
      <ListItem
        button
        style={{
          color: 'black',
          fontSize: '18px',
          marginTop: '-40px'
        }}
      >
        {' '}
        <span
          style={{ fontWeight: 'bold', marginLeft: '20px', color: '#1C4C51' }}
        >
          Menu&nbsp;{' '}
        </span>{' '}
      </ListItem>
      <Divider />
      <div to="/register">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Galeria</span>
        </ListItem>
      </div>
      <Link
        activeClass="active"
        to="test1"
        spy={true}
        smooth={true}
        offset={50}
        duration={500}
      >
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Certificaciones</span>
        </ListItem>
      </Link>
      <div to="/about">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Desarrollos</span>
        </ListItem>
      </div>
      <div to="/about">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Trabajos</span>
        </ListItem>
      </div>
      <div to="/about">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Presupuestos</span>
        </ListItem>
      </div>
      <div to="/about">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Nosotros</span>
        </ListItem>
      </div>
      <div to="/about">
        <ListItem button className={classes.drawerColorText}>
          <span className={classes.spanMarginLeft}>Contacto</span>
        </ListItem>
      </div>
    </Fragment>
  );
  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <List>{guestLinksDraw}</List>
    </div>
  );

  const guestLinks = (
    <Fragment>
      <div
        className={classes.middleBar}
        style={{
          paddingTop: '4px',
          textAlign: 'center',
          display: 'flex',
          position: 'absolute',
          left: '40%'
        }}
      >
        <li className={classes.hidenNav}>
          <div
            to="/login"
            style={{
              color: 'white',
              marginRight: '40px',
              marginTop: '15px',
              float: 'right'
            }}
          >
            Nosotros
          </div>
        </li>
        <li className={classes.hidenNav}>
          <div
            to="/register"
            style={{
              color: 'white',
              marginRight: '40px',
              marginTop: '15px',
              float: 'right'
            }}
          >
            Presupuestos
          </div>
        </li>
        <li className={classes.hidenNav}>
          <div
            to="/about"
            style={{
              color: 'white',
              marginRight: '40px',
              marginTop: '15px',
              float: 'right'
            }}
          >
            Trabajos
          </div>
        </li>
      </div>
    </Fragment>
  );

  const drawerz = (
    <Fragment>
      <nav className={classes.drawer} aria-label="npm uninstallMailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            anchor="right"
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper
            }}
            ModalProps={{
              keepMounted: true // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
    </Fragment>
  );

  return (
    <div className={classes.root} style={{ marginBottom: '-83px' }}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        {drawerz}
        <div>
          {' '}
          <ul>
            <li
              style={{
                marginLeft: '20px',
                margin: '15px 0px 15px 20px'
              }}
              className={classes.hiddenHamFlex}
            >
              <h2 style={{ fontFamily: 'Carme', fontSize: '23px' }}>
                Grupo Sime
              </h2>
            </li>
            <li>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon style={{ float: 'right', marginTop: '3.9px' }} />
              </IconButton>
            </li>
            {guestLinks}
          </ul>
        </div>
      </AppBar>{' '}
    </div>
  );
};

export default ResponsiveDrawer;
