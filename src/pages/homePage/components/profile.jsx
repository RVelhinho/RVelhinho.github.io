import React, { Component } from 'react';
import './profile.css';
import Eu from '../../../assets/images/eu.jpg';
import pdf from './CV_Ricardo_Velhinho.pdf';

class Profile extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div class='container-fluid p-0 h-auto'>
                    <div className='row w-100 h-100 m-0'>
                        <div className='col background'>
                            <div className='row w-100 h-75 justify-content-center text-center no-gutters'>
                                <div className='mb-5 align-self-start align-self-md-center align-self-lg-center col-12 col-sm-12 col-md-6 col-lg-6 order-2 order-sm-2 order-md-1 order-lg-1'>
                                    <p className='display-3 text-white ptext'>Ricardo Velhinho</p>
                                </div>
                                <div className='my-auto align-self-start pb-5 col-7 col-sm-5 col-md-4 col-lg-3 order-1 order-sm-1 order-md-2 order-lg-2 img-wrapper'>
                                    <img className='img-fluid border-dark rounded-circle' src={Eu}/> 
                                </div>
                            </div>
                            <div className='row w-75 h-25 justify-content-start mx-auto'>
                                <div className='col-12 col-sm-7 mt-3 col-md-5 col-lg-5 order-1' align='center'>
                                    <a target='_blank' href={pdf} download><button type='button' className='btn btn-outline-light btn-lg'>Download CV</button></a>
                                </div>
                                <div className='col-12 col-sm-4 mt-3 col-md-1 col-lg-1 order-2' align='center'>
                                    <a href="mailto:ricvelhinho@gmail.com"><button type='button' className='btn btn-outline-light btn-lg'>Contact</button></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Profile;