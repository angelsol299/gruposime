import React, { Fragment } from 'react';
import circuitos from '../../pics/circuitos.jpg';
import velas from '../../pics/velas.png';
import four from '../../pics/four.png';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    height: '100%',
    position: 'absolute',
    left: '0%',
    top: '0%'
  },
  velas: {
    height: '40%',
    width: '50%',
    position: 'absolute',
    left: '0%',
    top: '50%'
  },
  four: {
    height: '40%',
    width: '40%',
    position: 'absolute',
    left: '58%',
    top: '44%'
  },
  certificacionesTexto: {
    position: 'absolute',
    top: '10%',
    color: 'white',
    fontFamily: 'Darker Grotesque',
    fontSize: '90px',
    background: 'rgba(0, 151, 19, 0.6)',
    width: '100%',
    height: '20%',
    [theme.breakpoints.down('xs')]: {
      fontSize: '60px',
      top: '15%',
      left: '0%',
      height: '13%'
    }
  }
}));

const Trabajos = () => {
  const classes = useStyles();
  return (
    <Fragment>
      {/* <img className={classes.img} src={circuitos} alt="" /> */}
      <img src={velas} className={classes.velas} alt="" />
      <img src={four} className={classes.four} alt="" />
      <h2 className={classes.certificacionesTexto}>Trabajos</h2>
    </Fragment>
  );
};

export default Trabajos;
