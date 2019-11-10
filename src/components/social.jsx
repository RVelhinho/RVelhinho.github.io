import React, { Component } from 'react';
import Facebook from './face.jpg';
import Linkedin from './linkedin.png';
import Github from './github.jpg';
import './social.css';

class Social extends Component {
    render() { 
        return (
            <div className='container-fluid bg-dark'>
                <div className='row text-center mx-auto w-50'>
                    <div className='col-4 col-sm-4 col-md-4 my-3'>
                        <a href="https://www.facebook.com/ricardo.velhinho"><img src={Facebook} className='facebook'></img></a>
                    </div>
                    <div className='col-4 col-sm-4 col-md-4 my-3'>
                        <a href="https://www.linkedin.com/in/ricardo-velhinho/"><img src={Linkedin} className='linkedin'></img></a>    
                    </div>
                    <div className='col-4 col-sm-4 col-md-4 my-3' id='github'>
                        <a href="https://github.com/RVelhinho"><img src={Github} className='github'></img></a>
                    </div>
                </div>
                <div className='row text-center mx-auto w-50'>
                    <div className='col-6 my-3'>
                        <p className='h5 text-light'>+351 967 941 227</p>
                    </div>
                    <div className='col-6 my-3'>
                    <p className='h5 text-light'>ricvelhinho@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Social;