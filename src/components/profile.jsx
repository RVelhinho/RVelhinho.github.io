import React, { Component } from 'react';
import './profile.css';
import Eu from './eu.jpg';

class Profile extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div class='container-fluid'>
                    <div className='row mrow1'>
                        <div className='mx-auto my-5 w-75 col-9 col-sm-7 col-md-6 order-2 order-sm-1 order-md-1 order-lg-1 h3'>
                            <p className='text-secondary d-inline'>Hi! I'm </p>
                            <p className='text-warning d-inline'>Ricardo Velhinho</p>
                            <p className='text-secondary d-inline'>, a student at</p>
                            <p className='text-warning d-inline'> Instituto Superior
                            Técnico </p>
                            <p className='text-secondary d-inline'>in Lisbon, Portugal. I'm currently taking my Msc. in </p>
                            <p className='text-warning d-inline'>Computer Science & Engineering</p>
                            <p className='text-secondary d-inline'>.</p>
                        </div>
                        <div className='mx-auto col-6 col-sm-4 col-md-2 order-1 order-sm-2 order-md-2 order-lg-2'>
                            <img className='img-fluid border border-dark rounded-circle' src={Eu}/> 
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Profile;