import React, { Component } from 'react';
import './profile.css';
import Eu from './eu.jpg';

class Profile extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div class='container-fluid row-profile'>
                    <div className='row mrow1'>
                        <div className='mx-auto pt-xs-5 pt-sm-5 pt-md-5 w-75 col-9 col-sm-6 col-md-6 order-2 order-sm-1 order-md-1 order-lg-1 h3'>
                            <p className='text-white d-inline stext'>Ricardo Velhinho</p>
                        </div>
                        <div className='mx-auto my-5 my-sm-5 my-md-2 pt-xs-5 pt-sm-5 pt-md-0 col-6 col-sm-4 col-md-2 order-1 order-sm-2 order-md-2 order-lg-2'>
                            <img className='img border border-dark rounded-circle' src={Eu}/> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Profile;