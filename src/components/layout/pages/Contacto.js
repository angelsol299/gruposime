import React, { Fragment } from 'react';
import circuitos from '../../pics/circuitos.jpg';
import velas from '../../pics/velas.png';
import four from '../../pics/four.png';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Avatar from '@material-ui/core/Avatar';

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

  avatar: {
    marginTop: 10,
    width: 50,
    height: 50,
    left: '43%'
  }
}));

const Trabajos = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <Card style={{ margin: '0 10px ' }}>
            {/* <img className={classes.img} src={circuitos} alt="" /> */}
            <div style={{ margin: '20px 10px' }}>
              <Paper style={{ background: 'lightGrey', color: 'white' }}>
                <h2>Contacto</h2>
              </Paper>

              <p>
                5 años de experiencia en el sectro hotelero. 3 años en CFE.
                Universidad de Guadalajara.
              </p>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Trabajos;
