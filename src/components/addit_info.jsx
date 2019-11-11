import React, { Component } from 'react';
import './addit_info.css';
import Music from './music.png';
import TV from './tv.png';
import Sports from './sports.png';
import Tech from './tech.png';

class Additional_Info extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid'>
                <div className='row text-center'>
                    <div className='col-12 col-sm-12 col-md-5 ml-md-5 mabout'>
                        <p className='h1 text-dark'>About</p>
                        <hr className='w-75 my-4'></hr>
                        <p className='h5 w-75 text-secondary mx-auto'>I'm originally from Alentejo but after I finished highschool I decided to come to
                        Lisbon in order to pursue my career in Computer Science & Engineering at Instituto Superior Técnico in Lisbon and now I'm currently in my MSc.
                        which is specialized in Interaction & Visualization. I consider myself proactive, a fast learner, motivated and dedicated. I'm always ready to
                        take on new adventures in order to grow and become a better person and professional.
                        </p>
                    </div>
                    <div className='col-12 col-sm-12 col-md-6 ml-md-5 mabout'>
                        <p className='h1 text-dark'>Hobbies</p>
                        <hr className='w-75 my-4'></hr>
                            <div className='hobby1 row text-center'>
                                <img className='img-fluid col-2 col-sm-2 col-md-2 img' src={Music}/>
                                <p className='text-secondary col-4 col-sm-4 col-md-4 ml-md-4 mt-2 mt-sm-4 mt-md-4 hobbies'>Music</p>
                            </div>
                            <div className='hobby2 row text-center'>
                                <img className='img-fluid col-2 col-sm-2 col-md-2 img' src={TV}/>
                                <p className='text-secondary col-3 ml-2 col-sm-5 ml-sm-3 col-md-6 ml-md-4 mt-2 mt-sm-4 mt-md-4 hobbies'>TV Shows/Films</p>
                            </div>
                            <div className='hobby3 row text-center'>
                                <img className='img-fluid col-2 col-sm-2 col-md-2 img' src={Sports}/>
                                <p className='text-secondary col-3 ml-3 col-sm-4 col-md-4 ml-md-4 mt-2 mt-sm-4 mt-md-4 hobbies'>Sports</p>
                            </div>
                            <div className='hobby4 row text-center'>
                                <img className='img-fluid col-2 col-sm-2 col-md-2 img' src={Tech}/>
                                <p className='text-secondary col-3 ml-2 ml-2 col-sm-3 ml-sm-3 col-md-4 ml-md-3 mt-2 mt-sm-4 mt-md-4 hobbies'>Tech</p>
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Additional_Info;