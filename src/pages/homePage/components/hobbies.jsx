import React, { Component } from 'react';
import './hobbies.css';
import Tech from '../../../assets/images/tech.png';
import Music from '../../../assets/images/music.png';
import Sports from '../../../assets/images/sports.png';
import Code from '../../../assets/images/code.png';

class Hobbies extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid bg-dark h-auto py-5'>
                <div className='row text-center h-25'>
                    <div className='my-auto col-12'>
                        <p className='h3 text-white htext1'>Hobbies</p>
                    </div>
                </div>
                <div className='row row-hobbies text-center h-75 justify-content-around'>
                    <div className='col-container my-auto col-3 col-sm-3 col-md-3 col-lg-2 order-1'>
                        <p className='mt-5 text-white htext2'>Music</p>
                        <div className='img-container img-wrapper'>
                            <img src={Music} className='img-fluid m-2'></img>
                        </div>
                    </div>
                    <div className='col-container my-auto col-3 col-sm-3 col-md-3 col-lg-2 order-2'>
                        <p className='mt-5 text-white htext2'>Sports</p>
                        <div className='img-container img-wrapper'>
                            <img src={Sports} className='img-fluid m-2'></img>
                        </div>
                    </div>
                    <div className='col-container my-auto col-3 col-sm-3 col-md-3 col-lg-2 order-3'>
                        <p className='mt-5 text-white htext2'>Front-End</p>
                        <div className='img-container img-wrapper'>
                            <img src={Code} className='img-fluid m-2'></img>
                        </div>
                    </div>
                    <div className='col-container my-auto col-3 col-sm-3 col-md-3 col-lg-2 order-4'>
                        <p className='mt-5 text-white htext2'>Tech</p>
                        <div className='img-container img-wrapper'>
                            <img src={Tech} className='img-fluid m-2'></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Hobbies;