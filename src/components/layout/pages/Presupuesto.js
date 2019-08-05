import React, { Fragment } from 'react';
import circuitos from '../../pics/circuitos.jpg';
import velas from '../../pics/velas.png';
import four from '../../pics/four.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
  },
  button: {
    margin: theme.spacing(1),

    [theme.breakpoints.down('xs')]: {
      width: '260px !important',
      marginTop: '20px'
    }
  }
}));

const Trabajos = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={4}>
          <Card style={{ margin: '0 20px ' }}>
            {/* <img className={classes.img} src={circuitos} alt="" /> */}
            <div style={{ margin: '20px 10px' }}>
              <h2>PRESUPUESTO</h2>
              <br />
              <p>
                Contamos con presupuestos flexibles de acuerdo a sus necesidades
              </p>
            </div>
          </Card>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} sm={4}>
          <Card style={{ margin: '0 20px' }}>
            {/* <img className={classes.img} src={circuitos} alt="" /> */}
            <div style={{ margin: '20px 10px' }}>
              <h2>TIPO</h2>
              <br />
              <p>
                Ofrecemos nuestros servicios tanto a empresas privadas como a
                todo tipo de hogares y organizaciones
              </p>
            </div>
          </Card>
        </Grid>
        <br />
        <br />
        <Grid item xs={12} sm={4}>
          <Card style={{ margin: '0 20px' }}>
            {/* <img className={classes.img} src={circuitos} alt="" /> */}
            <div style={{ margin: '20px 10px' }}>
              <h2>OBTENER PRESUPUESTO</h2>
              <br />
              <p>
                ¿Qué tengo que hacer para obterner un presupuesto?
                <br />
                <br />
                Dado que cada necesidad de nuestros clientes es 100%
                personalizada, no disponemos de presupuesto fijos. Para obtener
                un presupuesto sólo da click en el siguiente botón.
              </p>
            </div>
          </Card>
        </Grid>
      </Grid>
      <br />
      <b />
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
        Presupuestar
      </Button>
    </Fragment>
  );
};

export default Trabajos;
