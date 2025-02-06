import React, { useState, useEffect } from 'react';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/index.jsx';
import { BrowserRouter, useRoutes } from 'react-router-dom';
import { auth, db } from './firebase/config.js';

import Footer from './components/footer/index.jsx';
import Login from './components/login/index.jsx';
import Register from './components/register/index.jsx';                                                          
import useLocalStorage from 'use-local-storage';
import Taisyklės from './components/taisykles/index.jsx';
import Home from './components/main/index.jsx';                 
import AddSkelbima from './components/addreklama/index.jsx'; 
import ManoSkelbimai from './components/manoSkelbimai/index.jsx';
import { onAuthStateChanged } from "firebase/auth";

const keliai = [
  {
    path: "/",
    element: <Home />,
  },
  {
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
  },
  {
    path: "/kurtiSkelbima",
    element: <AddSkelbima />,
  },
  {
    path: "/manoSkelbimai",
    element: <ManoSkelbimai />,
  }
]


const AppRoutes = () => useRoutes(keliai);
function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);
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
      <BrowserRouter> 
        <AppRoutes />       </BrowserRouter>
      <div className=' position-fixed bottom-0 end-0 mb-3 me-3 bd-mode-toggle'>
        <button onClick={switchTheme} className="btn btn-primary bg-body py-2 d-flex align-items-centerx">
          {theme === 'light' ? 
            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" id="Capa_1" width="24" height="24" viewBox="0 0 45.74 45.74" space="preserve">     <g>
            <g>
              <g>
                <g>
                  <g>
                    <path d="M12.2,15.267c0-3.322,0.896-6.43,2.448-9.113c0.376-0.649-0.191-1.451-0.918-1.265       C5.35,7.041-0.711,14.961,0.067,24.179c0.736,8.701,7.768,15.803,16.463,16.617c6.033,0.565,11.517-1.811,15.221-5.848       c0.5-0.546,0.073-1.432-0.666-1.401c-0.196,0.009-0.395,0.013-0.594,0.013C20.389,33.56,12.2,25.371,12.2,15.267z" />
                  </g>
                </g>
                <g>
                  <path d="M23.144,5.6l0.917,2.633l2.788,0.061c0.354,0.008,0.498,0.456,0.218,0.669l-2.221,1.687l0.805,2.669      c0.104,0.338-0.279,0.614-0.568,0.414l-2.292-1.59l-2.29,1.59c-0.29,0.201-0.669-0.076-0.569-0.414l0.805-2.669l-2.221-1.687      c-0.28-0.213-0.134-0.661,0.218-0.669l2.788-0.061L22.44,5.6C22.556,5.267,23.027,5.267,23.144,5.6z" />
                </g>
                <g>
                  <path d="M40.26,26.44l0.881,2.53l2.679,0.057c0.389,0.009,0.549,0.502,0.24,0.737l-2.134,1.621l0.772,2.564      c0.111,0.371-0.309,0.677-0.627,0.454l-2.201-1.527l-2.2,1.527c-0.318,0.223-0.739-0.083-0.626-0.454l0.772-2.564l-2.133-1.621      c-0.31-0.234-0.149-0.729,0.238-0.737l2.679-0.057l0.884-2.53C39.612,26.074,40.131,26.074,40.26,26.44z" />
                </g>
                <g>
                  <path d="M39.926,8.098l1.325,3.799l4.021,0.086c0.452,0.01,0.639,0.584,0.278,0.858l-3.204,2.434l1.162,3.853      c0.131,0.433-0.356,0.788-0.729,0.529l-3.306-2.294l-3.305,2.294c-0.372,0.259-0.86-0.097-0.729-0.529l1.161-3.853l-3.205-2.434      c-0.358-0.273-0.172-0.849,0.279-0.858l4.022-0.086l1.324-3.799C39.173,7.672,39.776,7.672,39.926,8.098z" />
                </g>
              </g>
            </g>
          </g></svg> : 
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="24" height="24" viewBox="0 0 30 30">             <path d="M 14.984375 0.98632812 A 1.0001 1.0001 0 0 0 14 2 L 14 5 A 1.0001 1.0001 0 1 0 16 5 L 16 2 A 1.0001 1.0001 0 0 0 14.984375 0.98632812 z M 5.796875 4.7988281 A 1.0001 1.0001 0 0 0 5.1015625 6.515625 L 7.2226562 8.6367188 A 1.0001 1.0001 0 1 0 8.6367188 7.2226562 L 6.515625 5.1015625 A 1.0001 1.0001 0 0 0 5.796875 4.7988281 z M 24.171875 4.7988281 A 1.0001 1.0001 0 0 0 23.484375 5.1015625 L 21.363281 7.2226562 A 1.0001 1.0001 0 1 0 22.777344 8.6367188 L 24.898438 6.515625 A 1.0001 1.0001 0 0 0 24.171875 4.7988281 z M 15 8 A 7 7 0 0 0 8 15 A 7 7 0 0 0 15 22 A 7 7 0 0 0 22 15 A 7 7 0 0 0 15 8 z M 2 14 A 1.0001 1.0001 0 1 0 2 16 L 5 16 A 1.0001 1.0001 0 1 0 5 14 L 2 14 z M 25 14 A 1.0001 1.0001 0 1 0 25 16 L 28 16 A 1.0001 1.0001 0 1 0 28 14 L 25 14 z M 7.9101562 21.060547 A 1.0001 1.0001 0 0 0 7.2226562 21.363281 L 5.1015625 23.484375 A 1.0001 1.0001 0 1 0 6.515625 24.898438 L 8.6367188 22.777344 A 1.0001 1.0001 0 0 0 7.9101562 21.060547 z M 22.060547 21.060547 A 1.0001 1.0001 0 0 0 21.363281 22.777344 L 23.484375 24.898438 A 1.0001 1.0001 0 1 0 24.898438 23.484375 L 22.777344 21.363281 A 1.0001 1.0001 0 0 0 22.060547 21.060547 z M 14.984375 23.986328 A 1.0001 1.0001 0 0 0 14 25 L 14 28 A 1.0001 1.0001 0 1 0 16 28 L 16 25 A 1.0001 1.0001 0 0 0 14.984375 23.986328 z" fill="currentColor"></path>
 </svg>
          }
        </button>
      </div>
      <Footer />
    </div>
  );
}


export default App;
