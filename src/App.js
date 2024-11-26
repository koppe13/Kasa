import React from "react";
import './App.css';
import './styles/components.scss';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Banner from "./components/banner.jsx";
import Main from "./components/main.jsx";

function App () {
  return (<div><Header />
               <Banner />
               <Main />
               <Footer />
          </div>)
  
  

  
};

export default App;
