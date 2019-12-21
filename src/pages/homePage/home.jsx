import React, { Component } from 'react';
import NavBar from '../../navigation/navbar';
import Profile from './components/profile';
import About from './components/about';
import Hobbies from './components/hobbies';
import Buttons from './components/buttons';
import Social from './components/social';
import Timeline from './components/timeline';
import Skills from './components/skills';
import Education from './components/education';

class Home extends Component {
    state = {  }
    render() { 
        return(
            <React.Fragment>
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
}
export default Home;