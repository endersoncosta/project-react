import React from "react";
//import "./App.css";
import CompNavbar from "./components/navbar";
import CompBlocagem from "./components/blocagem";

class App2 extends React.Component {
  render() {
    return (
      <React.Fragment>
        <CompNavbar />
        <CompBlocagem />
      </React.Fragment>
    );
  }
}

export default App2;
