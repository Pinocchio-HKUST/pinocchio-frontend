import React from "react";
import ReactDOM from "react-dom";
import firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./index.css";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import reportWebVitals from "./reportWebVitals";
import LandingPage from "./containers/LandingPage";
import LoginPage from "./containers/LoginPage";
import InterestsPage from "./containers/InterestsPage";
import SignUpPage from "./containers/SignUpPage";

var firebaseConfig = {
  apiKey: "AIzaSyDiNVv8_UBM0Egcbxqjaf0K51x-9J_sX0A",
  authDomain: "ust-sight-pinocchio.firebaseapp.com",
  projectId: "ust-sight-pinocchio",
  storageBucket: "ust-sight-pinocchio.appspot.com",
  messagingSenderId: "449896953766",
  appId: "1:449896953766:web:1f5374d846ffb070320167",
  measurementId: "G-NPZZZP04E6",
};
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Router basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/interests' component={InterestsPage} />
        <Route exact path='/signup' component={SignUpPage} />
        <Route exact path='*' component={LandingPage} />
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
