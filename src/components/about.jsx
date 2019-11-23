import React, { Component } from 'react';
import './about.css';
import IST from './ist.jpg';

class About extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid container-about p-0 h-auto'>
                <div className='row w-100 h-100 text-center align-items-center m-0'>
                    <div className='mx-auto col-12 col-sm-12 col-md-5 ml-md-5 col-lg-4'>
                        <p className='text-dark atext1'>About</p>
                        <hr className='w-75 my-4'></hr>
                        <p className='w-100 text-secondary mx-auto atext2'>I'm originally from Alentejo but after I finished highschool I decided to come to
                        Lisbon in order to pursue my career in Computer Science & Engineering at Instituto Superior Técnico in Lisbon and now I'm currently in my MSc.
                        which is specialized in Interaction & Visualization. I consider myself proactive, a fast learner, motivated and dedicated. I'm always ready to
                        take on new adventures in order to grow and become a better person and professional.
                        </p>
                    </div>
                    <div className='mx-auto my-auto col-10 col-sm-8 col-md-5 col-lg-5 img-wrapper'>
                        <img src={IST} className='img-fluid border border-dark'></img>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;