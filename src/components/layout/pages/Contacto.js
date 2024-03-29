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
import TextField from '@material-ui/core/TextField';

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
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Trabajos = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Grid container spacing={2}>
        <Grid item xs={10} sm={4}>
          <Grid>
            {/* <img className={classes.img} src={circuitos} alt="" /> */}
            <div style={{ marginLeft: '100px' }}>
              <Paper style={{ background: 'lightGrey', color: 'white' }}>
                <h2 style={{ color: 'black' }}>Contacto</h2>
              </Paper>

              <form
                action="https://formspree.io/angelsol299@hotmail.com"
                method="POST"
              >
                <TextField
                  required
                  id="outlined-name"
                  label="Name"
                  className={classes.textField}
                  //value={values.name}
                  // onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
                  name="name"
                />
                <TextField
                  required
                  type="email"
                  id="outlined-name"
                  label="Email"
                  className={classes.textField}
                  //value={values.name}
                  // onChange={handleChange('name')}
                  margin="normal"
                  variant="outlined"
                  name="name"
                />

                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  value="Send"
                  className={classes.button}
                >
                  Enviar
                </Button>
              </form>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Trabajos;
