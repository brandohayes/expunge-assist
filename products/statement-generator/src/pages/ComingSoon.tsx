import React, { useEffect } from 'react';
import { makeStyles, createStyles } from '@material-ui/core';

import logo from '../assets/iconBlack.svg';
import stopwatch from '../assets/stopwatch.svg';

const useStyles = makeStyles(() =>
  createStyles({
    comingSoonContainer: {
      width: '100%',
      height: '100vh',
      backgroundColor: '#fff',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    contentContainer: {
      width: '100%',
      height: '80%',
      display: 'flex',
      justifyContent: 'flex-start',
      flexDirection: 'column',
      alignItems: 'center',
    },
    headingContainer: {
      width: '60%',
      height: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    },
    mainLogo: {
      width: '10%',
      height: '60px',
    },
    mainTitle: {
      fontFamily: 'mulish',
      fontSize: '3.2em',
      marginLeft: '15px',
      color: '#9903ff',
      textTransform: 'uppercase',
    },
    imageContainer: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      marginTop: '50px',
    },
    stopwatchImage: {
      width: '50%',
      height: '300px',
      marginBottom: '0',
    },
    footerContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '35px',
      fontWeight: 'bold',
      fontSize: '1.5em',
      color: '#373F41',
    },
    subHeading: {
      fontFamily: 'mulish',
      fontSize: '2em',
    },
    conactText: {
      fontFamily: 'mulish',
      marginTop: '0',
      fontSize: '1.4em',
    },
    purpleText: {
      color: '#9903ff',
    },
  })
);

export default function ComingSoon() {
  const classes = useStyles();

  useEffect(() => {
    document.title = 'Coming Soon';
  });
  return (
    <div className={classes.comingSoonContainer}>
      <div className={classes.contentContainer}>
        <div className={classes.headingContainer}>
          <img className={classes.mainLogo} src={logo} alt="" />
          <h1 className={classes.mainTitle}>Expunge Assist</h1>
        </div>
        <div className={classes.imageContainer}>
          <img className={classes.stopwatchImage} src={stopwatch} alt="" />
        </div>
        <div className={classes.footerContainer}>
          <h2 className={classes.subHeading}>
            New things are{' '}
            <span className={classes.purpleText}>coming soon</span>
          </h2>
          <h2 className={classes.conactText}>
            In the meantime, please email&nbsp;
            <span className={classes.purpleText}>
              <a
                className={classes.purpleText}
                rel="noopener noreferer"
                href="mailto:info@expungeassist.com"
              >
                info@expungeassist.org
              </a>
            </span>
            &nbsp;for more information
          </h2>
        </div>
      </div>
    </div>
  );
}
