import React from "react";
import "./App.css";
import CompNavbar from './components/navbar'
import CompBanner from './components/banner'
import CompProjects from './components/listprojects'

let args = [
  {
    nomeSite: "Bob Esponja",
    tipoSite: "Vive no abacaxi e mora no mar",
    statusSite: "Calça Quadrada!"
  },
  {
      nomeSite: "Bob Leitão do mar",
      tipoSite: "Vive no abacaxi e mora no mar",
      statusSite: "Calça Quadrada!"
  },
  {
      nomeSite: "Patrick Stone",
      tipoSite: "Vive no abacaxi e mora no mar",
      statusSite: "Calça Redonda!"
  }
]

function App() {
   return (

    <React.Fragment>
      <CompNavbar />
      <CompBanner />
      <CompProjects args={args} />
    </React.Fragment>
    );
}

export default App;
