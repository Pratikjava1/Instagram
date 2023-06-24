import React from 'react'
import Home from './pages/home/Home';
import "./App.css"
import { Route,Routes } from "react-router-dom";
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup";
import Explore from './pages/explore/Explore';


function App() {
  return (
    <Routes>
      <Route exact path='/' Component={()=><div className='App'><Home/></div>}/>
      <Route exact path='/login' Component={Login}/>
      <Route exact path='Signup' Component={Signup}/>
      <Route exact path='/explore' Component={Explore}/>
      <Route exact path='/home' Component={()=><div className='App'><Home/></div>}/>
    </Routes>
    
  );
}

export default App;
