import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Grid } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import backgroundImage from "../../assets/landingPageBackground.png";
import mobileBackgroundImage from "../../assets/landingMobileBg.png";
import landingPinocchio from "../../assets/landingPinocchio.png";
import NavigationBar from "../../components/NavigationBar";
import TextButton from "../../components/TextButton";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    background: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    alignContent: "flex-start",
    contain: "content",
    "@media (max-width:480px)": {
      backgroundImage: `url(${mobileBackgroundImage})`,
    },
    alignItems: "center",
  },
  title: {
    fontFamily: "Times",
    fontWeight: "bold",
    lineHeight: 1,
    fontSize: 100,
    "@media (max-width:600px)": {
      fontSize: 50,
    },
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 25,
    textAlign: "center",
    margin: 0,
    paddingBottom: 21,
    "@media (max-width:480px)": {
      fontSize: 12,
    },
  },
  landingPinocchio: {
    display: "flex",
    height: "50vh",
    "@media (max-width:480px)": {
      height: "70vw",
      marginTop: "10vh",
    },
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
}));

function LandingPage() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Grid container className={classes.container}>
      <NavigationBar />
      <Grid container direction='column' alignItems='center'>
        <img
          src={landingPinocchio}
          alt='Logo'
          className={classes.landingPinocchio}
        ></img>
        <Typography className={classes.title}>PINOCCHIO</Typography>
        <Typography className={classes.description}>
          : a supportive community built just for our dreamers
        </Typography>
        <TextButton text='SIGN UP' onClick={() => history.push("/signup")} />
      </Grid>
    </Grid>
  );
}

export default LandingPage;
