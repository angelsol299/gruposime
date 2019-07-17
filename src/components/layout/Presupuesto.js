import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import projects from '../pics/projects.jpg';
import sime from '../pics/sime.png';

const useStyles = makeStyles(theme => ({
  onImageLogo: {
    left: '30%',
    width: '300px',
    height: '250px',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '480px',
    [theme.breakpoints.down('xs')]: {
      left: '10% !important'
    }
  },
  textOnImg: {
    left: '30%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: '200',
    fontSize: '30px',
    fontFamily: 'Roboto',
    [theme.breakpoints.down('xs')]: {
      left: '10% !important'
    }
  },
  buttonPresupuesto: {
    left: '35%',
    position: 'absolute',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    marginTop: '900px',
    zIndex: '200',
    fontFamily: 'Roboto',
    [theme.breakpoints.down('xs')]: {
      left: '25% !important'
    }
  },
  myHeaderImg: {
    width: '100%',
    height: '700px',

    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    background: 'rgba(0,0,0, 0.2)',

    [theme.breakpoints.down('xs')]: {}
  },
  myHeader: {
    width: '100%',
    height: '100%',
    [theme.breakpoints.down('xs')]: {}
  }
}));

const Presupuesto = () => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.myHeader}>
        <img className={classes.myHeaderImg} src={projects} alt="" />
        <h3 className={classes.textOnImg}>Presupuesto</h3>
        <Button
          className={classes.buttonPresupuesto}
          style={{
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '15px',
            width: '200px'
          }}
          variant="contained"
          color="secondary"
          className={classes.buttonPresupuesto}
        >
          {' '}
          Haz un presupuesto
        </Button>
      </div>
    </div>
  );
};

export default Presupuesto;
