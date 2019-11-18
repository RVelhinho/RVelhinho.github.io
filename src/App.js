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

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <Profile/>
      <About></About>
      <Hobbies></Hobbies>
      <Skills></Skills>
      <Timeline></Timeline>
      <Education></Education>
      <Social></Social>
    </React.Fragment>
  );
}

export default App;
