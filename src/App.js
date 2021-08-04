import React from "react";
import { Switch, Route, withRouter } from "react-router-dom";
// import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import LandingScreen from "./pages/LandingScreen";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./App.scss";

function App(props) {
    return (
        <div className="App">
            <Header />
            <Switch>
                <Route exact path="/">
                    <LandingScreen/>
                </Route>
            </Switch>
            {/* <Footer /> */}
        </div>
    );
}

export default withRouter(App);
