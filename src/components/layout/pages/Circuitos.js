import React, { Fragment } from 'react';
import circuitos from '../../pics/circuitos.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    height: '100%',
    position: 'absolute',
    // width: '100%',
    left: '0%',
    top: '0%',
    bottom: '0%',
    right: '0%',
    marginTop: '-0.5px'
  }
}));

const Circuitos = () => {
  const classes = useStyles();
  return (
    <div>
      <img className={classes.img} src={circuitos} alt="" />
    </div>
  );
};

export default Circuitos;
