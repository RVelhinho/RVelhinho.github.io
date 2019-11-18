import React, { Component } from 'react';
import './hobbies.css';
import Music from './music.png';
import TV from './tv.png';
import Sports from './sports.png';
import Tech from './tech.png';

class Hobbies extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid row-hobbies'>
                <div className='row text-center '>
                    <div className='col-12 col-sm-12 col-md-6 ml-md-6'>
                        <p className='h1 mt-5 text-white hob'>Hobbies</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hobbies;