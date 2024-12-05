import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import './styles/components.scss';
import './styles/valderoulant.scss';
import Header from "./components/header.jsx";
import Footer from "./components/footer.jsx";
import Banner from "./components/banner.jsx";
import Mainhome from "./components/mainhome.jsx";
import Main404 from "./components/main404.jsx";
import Mainpropos from "./components/mainpropos.jsx";
import Logement from "./components/logement.jsx";
import Home from "./pages/home.jsx";
import App2 from "./src/App2.jsx"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <PageError/>,
      children: [{
        path : 'Acceuil',
      },
      {
        path : 'A propos',  
      }    
    ]
  }
]);


function PageError (){
    return  <>
            <Main404 />
    </>
}


function Root () {
  return <>
         <Home/>
         </>
}




function App () {
 
 return <RouterProvider router={router}/>
  }
          
export default Home;
