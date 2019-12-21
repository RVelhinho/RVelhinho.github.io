import React from 'react';
import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/homePage/home';
import Project from './pages/projectPage/project';
import NavBar from './navigation/navbar';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Route exact path='/my-page/' component={Home}/>
      <Route exact path='/my-page/project' component={Home}/>
    </React.Fragment>
  );
}

export default App;
