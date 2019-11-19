import React, { Component } from 'react';
import './about.css';
import IST from './ist.jpg';

class About extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid container-about'>
                <div className='row row-about text-center'>
                    <div className='col-12 col-sm-12 col-md-5 ml-md-5 mabout'>
                        <p className='h1 text-dark'>About</p>
                        <hr className='w-75 my-4'></hr>
                        <p className='h5 w-100 text-secondary mx-auto'>I'm originally from Alentejo but after I finished highschool I decided to come to
                        Lisbon in order to pursue my career in Computer Science & Engineering at Instituto Superior Técnico in Lisbon and now I'm currently in my MSc.
                        which is specialized in Interaction & Visualization. I consider myself proactive, a fast learner, motivated and dedicated. I'm always ready to
                        take on new adventures in order to grow and become a better person and professional.
                        </p>
                    </div>
                    <div className='my-5 col-10 col-sm-10 col-md-4 mx-auto'>
                        <img src={IST} className='img img-ist border border-dark'></img>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;