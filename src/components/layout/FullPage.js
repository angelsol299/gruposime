import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import main1 from '../pics/electricity.jpeg';
import projects from '../pics/projects.jpg';
import instalacion from '../pics/instalacion.jpg';
import pruebas from '../pics/pruebas.jpg';
import pinzas from '../pics/pinzas.jpg';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Container } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  img: {
    position: 'relative',
    with: '100%',
    height: '99.2%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      marginLeft: '-200px',
      marginTop: '-400px'
    }
  },
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
          <div id="fullpage-wrapper">
            <div className="section section1">
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
              <div className="slide">
                <img className={classes.img} src={instalacion} alt="" />
              </div>
              <div className="slide">
                <img className={classes.img} src={pruebas} alt="" />
              </div>
              <div className="slide">
                <img className={classes.img} src={pinzas} alt="" />
                <h3>Slide 2.3</h3>
              </div>
            </div>
          </div>
        );
      }}
    />
  );
};

export default FullPage;
