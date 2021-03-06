import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Grid,
  useMediaQuery,
  Snackbar,
} from "@material-ui/core";
import firebase from "firebase/app";
import backgroundImage from "../../assets/loginPageBackground.png";
import mobileBackgroundImage from "../../assets/loginMobileBg.png";
import arrowRight from "../../assets/arrowRight.png";
import NavigationBar from "../../components/NavigationBar";
import Input from "../../components/Input";

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
  },
  title: {
    fontFamily: "Times",
    fontWeight: "bold",
    fontSize: 60,
    "@media (max-width:480px)": {
      fontSize: 25,
    },
  },
  description: {
    fontFamily: "Roboto",
    fontSize: 30,
    textAlign: "center",
    margin: 0,
    paddingBottom: 21,
    "@media (max-width:480px)": {
      fontSize: 15,
      paddingBottom: 38,
    },
  },
  button: {
    width: 95,
    height: 77,
    backgroundColor: "#000000",
    color: "#FFFFFF",
    borderRadius: 15,
    alignSelf: "flex-end",
    "&:hover": {
      backgroundColor: "#000000",
    },
    "@media (max-width:480px)": {
      width: 45,
      height: 36,
      marginTop: 8,
      minWidth: 45,
      padding: "6px 6px",
      marginLeft: "42vw",
    },
  },
  inputForm: {
    display: "flex",
    alignItems: "center",
    marginTop: "20vh",
    "@media (max-width:480px)": {
      marginTop: 50,
    },
  },
  input: {
    "@media (max-width:480px)": {
      width: 271,
      height: 48,
      marginBottom: 16,
      justifyContent: "center",
      "& fieldset": {
        borderColor: "#000000",
        "& legend": {
          "&[class*='legendNotched']": {
            paddingRight: "3vw",
            marginRight: "3vw",
          },
        },
      },
      "&::placeholder": {
        color: "#000000",
      },
    },
  },
  startMyJourneyText: {
    fontWeight: "bold",
    fontSize: 25,
    color: "#000000",
    letterSpacing: "0.14em",
    paddingRight: 28,
    alignSelf: "center",
    marginLeft: 150,
  },
}));

function LoginPage() {
  const classes = useStyles();
  const isMobile = useMediaQuery("(max-width:480px)");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLoggedIn(false);
  };

  const handleClick = () => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        console.log("You're in already!");
      } else {
        firebase
          .auth()
          .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
          .then(() => {
            return firebase
              .auth()
              .signInWithEmailAndPassword(email, password)
              .then((userCredential) => {
                var user = userCredential.user;
                setUsername(user.displayName);
                setLoggedIn(true);
              })
              .catch((error) => console.log(error));
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <Grid container className={classes.container}>
      <NavigationBar />
      <Grid container item direction='column' className={classes.inputForm}>
        <Typography className={classes.title}>WELCOME BACK,</Typography>
        <Typography className={classes.description}>
          we’re happy you came back to us~
        </Typography>
        {isMobile && (
          <Grid container item direction='column' alignContent='center'>
            <Input
              className={classes.input}
              InputLabelProps={{
                style: { top: 5, color: "#000000", letterSpacing: "0.14em" },
              }}
              size='small'
              label='ITSC ACCOUNT'
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              className={classes.input}
              InputLabelProps={{
                style: { top: 5, color: "#000000", letterSpacing: "0.14em" },
              }}
              size='small'
              label='SECRET WORD'
              isPassword={true}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Grid>
        )}
        {!isMobile && (
          <Grid container item direction='column' alignContent='center'>
            <Input
              label='ITSC ACCOUNT'
              onChange={(e) => setEmail(e.target.value)}
            ></Input>
            <Input
              label='SECRET WORD'
              isPassword={true}
              onChange={(e) => setPassword(e.target.value)}
            ></Input>
          </Grid>
        )}
        <Grid container direction='row' justify='center' alignContent='center'>
          {!isMobile && (
            <Typography className={classes.startMyJourneyText}>
              start my journey
            </Typography>
          )}
          <Button
            className={classes.button}
            variant='contained'
            onClick={handleClick}
          >
            <img alt='arrowRight' src={arrowRight} width='80%'></img>
          </Button>
        </Grid>
      </Grid>
      <Snackbar
        open={loggedIn}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        autoHideDuration={9000}
        message={`Welcome, ${username}!`}
      />
    </Grid>
  );
}

export default LoginPage;
