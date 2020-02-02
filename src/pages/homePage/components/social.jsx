import React, { Component } from 'react';
import Facebook from '../../../assets/images/face.jpg';
import Linkedin from '../../../assets/images/linkedin.png';
import Github from '../../../assets/images/github.jpg';
import './social.css';

class Social extends Component {
    render() { 
        return (
            <div className='container-fluid container-social bg-dark'>
                <p className='text-center text-white py-3 h3'>Find Me!</p>
                <div className='row text-center mx-auto w-100 justify-content-center'>
                    <div className='my-auto col-3 col-sm-3 col-md-3 col-lg-2 p-3'>
                        <a href="https://www.facebook.com/ricardo.velhinho"><img src={Facebook} className='facebook img-fluid'></img></a>
                    </div>
                    <div className='my-auto col-3 col-sm-3 col-md-3 col-lg-2 py-3'>
                        <a href="https://www.linkedin.com/in/ricardo-velhinho/"><img src={Linkedin} className='linkedin img-fluid'></img></a>    
                    </div>
                    <div className='my-auto col-3 col-sm-3 col-md-3 col-lg-2 py-3' id='github'>
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