import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Profile from './components/profile';
import About from './components/about';
import Hobbies from './components/hobbies';
import Buttons from './components/buttons';
import Social from './components/social';
import Timeline from './components/timeline';
import Skills from './components/skills';
import Education from './components/education';
import {Route} from 'react-router-dom';
import Home from './components/home';

function App() {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home}/>
    </React.Fragment>
  );
}

export default App;
