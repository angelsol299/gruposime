import React, { Fragment } from 'react';
import main1 from '../pics/electricity.jpeg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const myHeader = {
  width: '100%',
  height: '100%'
};

const useStyles = makeStyles(theme => ({
  input: {
    display: 'none'
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
  },
  myHeaderImg: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundSize: 'cover',
    background: 'rgba(0,0,0, 0.7)',
    marginTop: '-83px',
    [theme.breakpoints.down('xs')]: {
      position: 'absolute'
    }
  }
}));

const Mains = () => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.myHeaderImg} src={main1} alt="main image" />
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
          Preguntas mess
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
  );
};

export default Mains;
