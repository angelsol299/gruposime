import React from 'react';
import 'fullpage.js/vendors/scrolloverflow';
import ReactFullpage from '@fullpage/react-fullpage';
import main1 from '../pics/electricity.jpeg';
import projects from '../pics/projects.jpg';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  img: {
    position: 'relative',
    with: '100%',
    height: '100%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      height: '100%',
      //position: 'absolute',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }
}));

const FullPage = () => {
  const classes = useStyles();
  const onLeave = (origin, destination, direction) => {
    console.log('Leaving section ' + origin.index);
  };
  const afterLoad = (origin, destination, direction) => {
    console.log('After load: ' + destination.index);
  };

  return (
    <ReactFullpage
      style={{ marginTop: '-100px' }}
      anchors={['firstPage', 'secondPage', 'thirdPage']}
      sectionsColor={['#282c34', '#ff5f45', '#0798ec']}
      scrollOverflow={true}
      onLeave={onLeave}
      afterLoad={afterLoad}
      render={({ state, fullpageApi }) => {
        return (
          <div id="fullpage-wrapper">
            <div className="section section1">
              <img className={classes.img} src={main1} alt="" />
            </div>
            <div className="section">
              <div className="slide">
                <h3>Slide 2.1</h3>
              </div>
              <div className="slide">
                <h3>Slide 2.2</h3>
              </div>
              <div className="slide">
                <img src={main1} alt="" />
                <h3>Slide 2.3</h3>
              </div>
            </div>
            <div className="section">
              <img
                src={projects}
                alt=""
                style={{
                  with: '100%',
                  height: '100%',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover'
                }}
              />
            </div>
          </div>
        );
      }}
    />
  );
};

export default FullPage;
