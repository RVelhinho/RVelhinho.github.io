import React, { Component } from 'react';
import Facebook from './face.jpg';
import Linkedin from './linkedin.png';
import Github from './github.jpg';
import './social.css';

class Social extends Component {
    render() { 
        return (
            <div className='container-fluid container-social'>
                <p className='text-center text-white py-3 h3'>Find Me!</p>
                <div className='row text-center mx-auto w-50'>
                    <div className='my-auto col-4 col-sm-4 col-md-4 p-3'>
                        <a href="https://www.facebook.com/ricardo.velhinho"><img src={Facebook} className='facebook img-fluid'></img></a>
                    </div>
                    <div className='my-auto col-4 col-sm-4 col-md-4 py-3'>
                        <a href="https://www.linkedin.com/in/ricardo-velhinho/"><img src={Linkedin} className='linkedin img-fluid'></img></a>    
                    </div>
                    <div className='my-auto col-4 col-sm-4 col-md-4 py-3' id='github'>
                        <a href="https://github.com/RVelhinho"><img src={Github} className='github img-fluid'></img></a>
                    </div>
                </div>
                <div className='row text-center mx-auto w-50'>
                    <div className='col-12 col-sm-12 col-md-6 order-1 py-3'>
                        <p className='text-light stext2'>+351 967 941 227</p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 order-2 py-3'>
                    <p className='text-light stext2'>ricvelhinho@gmail.com</p>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Social;