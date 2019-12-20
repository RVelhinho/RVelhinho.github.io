import React, { Component } from 'react';
import NavBar from './navbar';
import Profile from './profile';
import About from './about';
import Hobbies from './hobbies';
import Buttons from './buttons';
import Social from './social';
import Timeline from './timeline';
import Skills from './skills';
import Education from './education';

class Home extends Component {
    state = {  }
    render() { 
        return(
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
}
export default Home;