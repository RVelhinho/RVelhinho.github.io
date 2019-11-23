import React, { Component } from 'react';
import './profile.css';
import Eu from './eu.jpg';

class Profile extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div class='container-fluid container-profile p-0 h-auto'>
                    <div className='row w-100 h-100 m-0'>
                        <div className='col background'>
                            <div className='row w-100 h-100 justify-content-center text-center no-gutters'>
                                <div className='display-1 mb-5 align-self-start align-self-md-center align-self-lg-center col-12 col-sm-12 col-md-6 col-lg-6 order-2 order-sm-2 order-md-1 order-lg-1'>
                                    <p className='text-white ptext'>Ricardo Velhinho</p>
                                </div>
                                <div className='my-auto align-self-start col-7 col-sm-5 col-md-4 col-lg-3 order-1 order-sm-1 order-md-2 order-lg-2 img-wrapper'>
                                    <img className='img-fluid border-dark rounded-circle' src={Eu}/> 
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