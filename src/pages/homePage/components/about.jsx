import React, { Component } from 'react';
import './about.css';
import IST from '../../../assets/images/ist.jpg';
import { Link } from 'react-router-dom';

class About extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid container-about p-0 h-auto'>
                <div className='row w-100 h-100 text-center align-items-center m-0'>
                    <div className='mx-auto col-12 col-sm-12 col-md-5 ml-md-5 col-lg-6 my-5 px-5 px-sm-3 px-md-0 px-lg-0'>
                        <p className='h3 text-dark'>About</p>
                        <hr className='w-50 my-4'></hr>
                        <p className='w-100 text-secondary mx-auto atext2'>I'm originally from Alentejo but after I finished highschool I decided to come to
                        Lisbon in order to pursue my career in Computer Science & Engineering at Instituto Superior Técnico in Lisbon and now I'm currently in my MSc.
                        which is specialized in Interaction & Visualization. I consider myself proactive, a fast learner, motivated and dedicated. I'm always ready to
                        take on new adventures in order to grow and become a better person and professional.
                        </p>
                        <Link to="/projects"><button type='button' className='btn btn-outline-dark btn-lg mt-5'>Check out some projects</button></Link>
                    </div>
                    <div className='py-5 mx-auto my-auto col-10 col-sm-8 col-md-6 col-lg-5 img-wrapper d-none d-md-block '>
                        <img src={IST} className='img-fluid border border-dark'></img>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default About;