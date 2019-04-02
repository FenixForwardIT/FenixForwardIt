import React, { Component } from "react";
import classes from "./Home.css";
import { NavLink } from 'react-router-dom';

export class Home extends Component {
  render() {
    let attachedClasses = [classes.Btn, classes.BtnWhite, classes.BtnAnimated];

    return (
      <header className={classes.Header}>
        <div className={classes.TextBox}>
          <h1 className={classes.HeadingPrimary}>
            <span className={classes.HeadingPrimaryMain}>
              {" "}
              Fenix forward it{" "}
            </span>
            <span className={classes.HeadingPrimarySub}>
              {" "}
              Donde nuestros proyectos son posibles{" "}
            </span>
          </h1>
          <NavLink to='/proyectos' className={attachedClasses.join(" ")}>
            Nuestros proyectos
          </NavLink>
        </div>
      </header>
    );
  }
}

export default Home;
