import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/homePage/home';
import NavBar from './navigation/navbar';
import Projects from './pages/projectPage/projects';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route path='/projects' component={Projects}/>
    </React.Fragment>
  );
}

export default App;
