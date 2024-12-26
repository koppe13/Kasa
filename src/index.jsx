import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './styles/main.scss'
import Home from './pages/home'
import Header from './components/Main/header';
import Footer from './components/Main/footer';
import Error404 from './pages/error404.jsx';
import Apropos from "./pages/apropos.jsx";
import ProfileContainer from "./components/logementcontainer/index.jsx";
 
ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mainpropos" element={<Apropos/>}/>
                    <Route path="logement/:id" element={<ProfileContainer/>} />
                    <Route path="*" element={<Error404/>} />
                </Routes>
            <Footer />
        </Router>
    </React.StrictMode>,
document.getElementById('root')
)


