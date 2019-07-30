import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import projects from '../../pics/projects.jpg';

const useStyles = makeStyles(theme => ({
  certificacionesTexto: {
    position: 'absolute',
    top: '35%',
    left: '0%',
    right: '60%',
    color: 'black',
    fontFamily: 'Darker Grotesque',
    fontSize: '90px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '70px',
      top: '15%',
      left: '3%'
    }
  },
  certificacionUno: {
    position: 'absolute',
    top: '25%',
    right: '35%',
    color: 'black',
    fontFamily: 'Darker Grotesque',
    fontSize: '40px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '50px',
      top: '40%',
      right: '30%'
    }
  },
  certificacionDos: {
    position: 'absolute',
    top: '85%',
    right: '55%',
    color: 'black',
    fontFamily: 'Darker Grotesque',
    fontSize: '40px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '50px',
      top: '50%',
      right: '18%'
    }
  },
  certificacionTres: {
    position: 'absolute',
    top: '10%',
    right: '65%',
    color: 'black',
    fontFamily: 'Darker Grotesque',
    fontSize: '40px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '50px',
      top: '60%',
      right: '-12%',
      left: '-10%'
    }
  },
  certificacionCuatro: {
    position: 'absolute',
    top: '65%',
    right: '15%',
    color: 'black',
    fontFamily: 'Darker Grotesque',
    fontSize: '40px',
    [theme.breakpoints.down('xs')]: {
      fontSize: '50px',
      top: '70%',
      right: '25%'
    }
  }
}));

const Certificaciones = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <img
        style={{
          height: '100%',
          position: 'absolute',
          left: '0%',
          top: '0%'
        }}
        src={projects}
        alt=""
      />
      <h2 className={classes.certificacionesTexto}>Certificaciones</h2>
      <h2 className={classes.certificacionUno}>ISO 9001</h2>
      <h2 className={classes.certificacionDos}>CFE autorizado</h2>
      <h2 className={classes.certificacionTres}>Best Place to Work</h2>
      <h2 className={classes.certificacionCuatro}>INFONAVIT</h2>
    </Fragment>
  );
};

export default Certificaciones;
