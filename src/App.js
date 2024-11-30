import React from "react";
import './App.css';
import './styles/components.scss';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
//import Banner from "./components/banner.jsx";
import Mainhome from "./components/mainhome.jsx";
//import Main404 from "./components/main404.jsx";
import Mainpropos from "./components/mainpropos.jsx"

function App () {
  return (     <div>
                <Header />
                <Mainhome />
                <Footer />
                </div>
          )
  
  

  
};

export default App;
