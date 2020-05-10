import React from "react";
import styles from "./Dashboard.module.scss";
import { Router, Link } from "@reach/router";
import Quiz from "../Quiz";
import Weather from "../Weather";
import Football from "../Football";

const Dashboard = () => {
  return (
    <>
        <Weather path="weather" />

      {/* <Router>
        <Quiz path="quiz" />
        <Weather path="weather" />
        <Football path="football" />
      </Router> */}
    </>
  );
};

export default Dashboard;
