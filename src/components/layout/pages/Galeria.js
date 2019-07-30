import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import instalacion from '../../pics/instalacion.jpg';
import pruebas from '../../pics/pruebas.jpg';
import pinzas from '../../pics/pinzas.jpg';

const useStyles = makeStyles(theme => ({
  imgGallery: {
    with: '100%',
    height: '99.21%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

    [theme.breakpoints.down('sm')]: {
      position: 'relative',
      top: '0%',
      left: '0%',
      backgroundColor: 'white !important'
    }
  }
}));

const Galeria = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className="slide" style={{ backgroundColor: 'white ' }}>
        <img className={classes.imgGallery} src={instalacion} alt="" />
        <h1
          style={{
            position: 'absolute',
            top: '40%',
            left: '0%',
            right: '66%',
            color: 'white',
            fontFamily: 'Darker Grotesque',
            fontSize: '90px'
          }}
        >
          Galeria
        </h1>
      </div>
      <div className="slide" style={{ backgroundColor: 'white ' }}>
        <img className={classes.imgGallery} src={pruebas} alt="" />
      </div>
      <div className="slide" style={{ backgroundColor: 'white' }}>
        <img className={classes.imgGallery} src={pinzas} alt="" />
      </div>
    </Fragment>
  );
};

export default Galeria;
