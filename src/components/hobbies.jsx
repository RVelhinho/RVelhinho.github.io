import React, { Component } from 'react';
import './hobbies.css';
import Phone from './phone.png';
import Music from './music.png';
import Running from './running.png';
import Code from './code.png';

class Hobbies extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid container-hobbies'>
                <div className='row text-center h-100 w-100'>
                    <div className='col-12 col-sm-12 col-md-6'>
                        <p className='mt-5 text-white hob'>Hobbies</p>
                    </div>
                </div>
                <div className='row row-hobbies text-center h-75'>
                    <div className='col-container col-12 col-sm-3 col-md-3 order-1'>
                        <p className='mt-5 text-white'>Music</p>
                        <div className='img-container'>
                            <img src={Music} className='img-hobby1'></img>
                        </div>
                    </div>
                    <div className='col-container col-12 col-sm-3 col-md-3 order-2'>
                        <p className='mt-5 text-white'>Sports</p>
                        <div className='img-container'>
                            <img src={Running} className='img-hobby2 m-3'></img>
                        </div>
                    </div>
                    <div className='col-container col-12 col-sm-3 col-md-3 order-3'>
                        <p className='mt-5 text-white'>Front-End</p>
                        <div className='img-container'>
                            <img src={Code} className='img-hobby3 my-4'></img>
                        </div>
                    </div>
                    <div className='col-container col-12 col-sm-3 col-md-3 order-4'>
                        <p className='mt-5 text-white'>Tech</p>
                        <div className='img-container'>
                            <img src={Phone} className='img-hobby4 m-4'></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hobbies;