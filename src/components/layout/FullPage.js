import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import main1 from '../pics/electricity.jpeg';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Certificaciones from './pages/Certificaciones';
import Galeria from './pages/Galeria';
import Trabajos from './pages/Trabajos';
import Presupuesto from './pages/Presupuesto';
import ScrollUpButton from 'react-scroll-up-button';
import {
  Link,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller
} from 'react-scroll';

const useStyles = makeStyles(theme => ({
  img: {
    position: 'absolute',
    with: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    left: '0%',
    top: '0%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      left: '0%',
      top: '0%'
    }
  },
  galleryContainer: {},
  buttonResponsive: {
    [theme.breakpoints.down('xs')]: {
      //marginLeft: '65px !important',
      // paddingTop: '220px',
      // position: 'relative !important',
      flexGrow: '1 !important',
      flexDirection: 'column !important',
      flexWrap: 'wrap !important',
      position: 'relative',
      left: '65% !important',
      top: '45% !important'
    },

    [theme.breakpoints.up('sm')]: {
      marginLeft: '-222px !important',
      left: '50%'
    },
    [theme.breakpoints.up('md')]: {
      marginLeft: '-194px !important'
    }
  },
  button: {
    margin: theme.spacing(1),

    [theme.breakpoints.down('xs')]: {
      width: '260px !important',
      marginTop: '20px'
    }
  }
}));

const FullPage = () => {
  const classes = useStyles();
  const onLeave = (origin, destination, direction) => {
    console.log('Leaving section ' + origin.index);
  };
  const afterLoad = (origin, destination, direction) => {
    console.log('After load: ' + destination.index);
  };

  return (
    <ReactFullpage
      style={{ marginTop: '-100px' }}
      anchors={['firstPage', 'secondPage', 'thirdPage']}
      sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
      scrollOverflow={true}
      onLeave={onLeave}
      afterLoad={afterLoad}
      render={({ state, fullpageApi }) => {
        return (
          <ScrollUpButton
            ContainerClassName="ScrollUpButton__Container"
            TransitionClassName="ScrollUpButton__Toggled"
          >
            <div id="fullpage-wrapper">
              <div className="section">
                <img className={classes.img} src={main1} alt="" />
                <div
                  className={classes.buttonResponsive}
                  style={{
                    position: 'absolute',
                    top: '50%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginLeft: '-194px'
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: 'white',
                      color: 'black',
                      borderRadius: '15px',
                      width: '200px'
                    }}
                    variant="contained"
                    color="secondary"
                    className={classes.button}
                  >
                    Pregunta
                  </Button>
                  <Button
                    style={{
                      color: 'white',
                      borderRadius: '15px',
                      border: ' 2px solid white',
                      background: 'rgba(0,0,0,0.5)',
                      width: '200px'
                    }}
                    variant="outlined"
                    color="secondary"
                    className={classes.button}
                  >
                    Conócenos
                  </Button>
                </div>
              </div>
              <div className="section">
                <Element name="test1" className="element">
                  <Galeria />
                </Element>
              </div>
              <div className="section">
                <Certificaciones />
              </div>
              <div className="section">
                <Trabajos />
              </div>
            </div>
            <div className="section">
              <Presupuesto />
            </div>
          </ScrollUpButton>
        );
      }}
    />
  );
};

export default FullPage;
