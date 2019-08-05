import React, { Fragment } from 'react';
import circuitos from '../../pics/circuitos.jpg';
import velas from '../../pics/velas.png';
import four from '../../pics/four.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

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
    top: '50%',
    [theme.breakpoints.up('xs')]: {
      height: '30%',
      width: '80%',
      left: '10%',
      top: '30%'
    }
  },
  four: {
    height: '40%',
    width: '40%',
    position: 'absolute',
    left: '58%',
    top: '44%',
    [theme.breakpoints.up('xs')]: {
      height: '30%',
      width: '80%',
      left: '10%',
      top: '60%'
    }
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
  },
  reponsiveLogos: {
    [theme.breakpoints.up('xs')]: {
      display: 'grid',
      gridColumn: '1'
    }
  }
}));

const Trabajos = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Card style={{ margin: '0 20px' }}>
        {/* <img className={classes.img} src={circuitos} alt="" /> */}
        <div style={{ margin: '10px 10px' }}>
          <h2>PRESUPUESTO</h2>
          <br />
          <p>
            Contamos con presupuestos flexibles de acuerdo a sus necesidades
          </p>
        </div>
      </Card>
      <br />
      <br />
      <Card style={{ margin: '0 20px' }}>
        {/* <img className={classes.img} src={circuitos} alt="" /> */}
        <div style={{ margin: '10px 10px' }}>
          <h2>TIPO</h2>
          <br />
          <p>
            Ofrecemos nuestros servicios tanto a empresas privadas como a todo
            tipo de hogares y organizaciones
          </p>
        </div>
      </Card>
    </Fragment>
  );
};

export default Trabajos;
