import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/navbar';
import Profile from './components/profile';
import Additional_Info from './components/addit_info';
import Buttons from './components/buttons';
import Social from './components/social';
import Timeline from './components/timeline';
import Skills from './components/skills';
import Education from './components/education';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Profile/>
      <Buttons></Buttons>
      <Additional_Info></Additional_Info>
      <Skills></Skills>
      <Timeline></Timeline>
      <Education></Education>
      <Social></Social>
    </React.Fragment>
  );
}

export default App;
