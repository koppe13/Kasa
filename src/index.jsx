import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals.js';
import './styles/main.scss'
import Home from './pages/home.jsx'
import Header from './components/Main/header.jsx';
import Footer from './components/Main/footer.jsx';
import Error404 from './pages/error404.jsx';
import Apropos from "./pages/apropos.jsx";
import ProfileContainer from "./components/logementcontainer/index.jsx";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
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
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
