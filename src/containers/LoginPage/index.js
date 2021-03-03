import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Grid, Input } from "@material-ui/core";
import backgroundImage from "../../assets/loginPageBackground.png";
import arrowRight from "../../assets/arrowRight.png";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    height: "100vh",
    backgroundImage: `url(${backgroundImage})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  title: {
    fontFamily: "Times",
    fontWeight: "bold",
    fontSize: "60px",
    "@media (max-width:780px)": {
      fontSize: "40px",
    },
  },
  description: {
    fontFamily: "Roboto",
    fontSize: "30px",
    textAlign: "center",
    margin: "0px",
    paddingBottom: "21px",
    "@media (max-width:780px)": {
      fontSize: "20px",
    },
  },
  button: {
    width: "95px",
    height: "77px",
    backgroundColor: "#3C79B0",
    color: "#FFFFFF",
    borderRadius: "15px",
    alignSelf: "flex-end",
    "&:hover": {
      backgroundColor: "#3C79B0",
    },
  },
  inputForm: {
    display: "flex",
    alignContent: "center",
    alignSelf: "center",
    alignItems: "flex-start",
    marginTop: "60px",
  },
  input: {
    width: "512px",
    marginBottom: "28px",
  },
}));

function LoginPage() {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <Grid container item direction='column' className={classes.inputForm}>
        <Typography className={classes.title}>WELCOME BACK,</Typography>
        <Typography className={classes.description}>
          we’re happy you came back to us~
        </Typography>
        <Input className={classes.input} placeholder='Your name'></Input>
        <Input className={classes.input} placeholder='secret words'></Input>
        <Button className={classes.button} variant='contained'>
          <img src={arrowRight} width='80%'></img>
        </Button>
      </Grid>
    </Grid>
  );
}

export default LoginPage;
