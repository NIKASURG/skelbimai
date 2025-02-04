import React, { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/index.jsx';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import Footer from './components/footer/index.jsx';
import Login from './components/login/index.jsx';
import Register from './components/register/index.jsx';                                                          
import useLocalStorage from 'use-local-storage';
import Taisyklės from './components/taisykles/index.jsx';
import Home from './components/main/index.jsx';                 
import AddSkelbima from './components/addreklama/index.jsx';                                                                                                                                                                                                                                                                                
const keliai = [
  {
    path: "/",
    element: <Home />,
  },{
    path: '/login',
    element: <Login />
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/taisykles",
    element: <Taisyklės />,
  },{
    path: "/kurtiSkelbima",
    element: <AddSkelbima />,
  }
]


const AppRoutes = () => useRoutes(keliai);
function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-bs-theme", theme);
  }, [theme]);

  return (
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <BrowserRouter> {/* BrowserRouter apgaubia visus komponentus, kurie naudoja routingą */}
        <AppRoutes /> {/* Įdėjome AppRoutes čia, kad veiktų routingas */}
      </BrowserRouter>
      <div className=' position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle'>
        <button onClick={switchTheme} className="btn btn-primary bg-body py-2 d-flex align-items-centerx">
          {theme === 'light' ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" id="Capa_1" width="24" height="24" viewBox="0 0 45.74 45.74" space="preserve"> {/* Paveikslėlis tamsiam režimui */} </svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30"> {/* Paveikslėlis šviesiam režimui */} </svg>
          }
        </button>
      </div>
      <Footer />
    </div>
  );
}


export default App;
