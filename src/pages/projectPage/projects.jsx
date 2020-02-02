import React, { Component } from 'react';
import Youtube from '../../assets/images/youtube_trends.png';
import UnderWay from '../../assets/images/underway.png';
import { Link } from 'react-router-dom';

class Projects extends Component {
    state = {  }
    render() { 
        return(
            <div className='container-fluid h-auto p-0'>
                <div className='row w-100 align-items-center'>
                    <div className='col-3 col-sm-3 col-md-2 col-lg-2 mt-3 ml-2' align='center'>
                        <Link to="/"><button type='button' className='btn btn-outline-dark'>Home</button></Link>
                    </div>
                </div>
                <div className='row w-100 mt-2 mx-auto'>
                    <div className='col-12 text-center'>
                        <p className='display-3 text-dark'>Projects</p>
                    </div>
                </div>
                <hr className='w-75 my-4'/>
                <div className='row w-100 justify-content-center mt-5 mx-0'>
                    <div className='col-12 col-sm-5 col-md-4 col-lg-4 text-center' align='center'>
                        <a href='https://github.com/ggalambas/1920-MEIC-VI'><img src={Youtube} className='img-fluid border border-dark rounded'></img></a>
                        <p className='display-5 text-dark mt-3'>Youtube Trends Data Visualization (using D3 library)</p>
                    </div>
                    <div className='col-12 col-sm-5 col-md-4 col-lg-4 text-center' align='center'>
                        <a href='https://github.com/TheMrKiko/CCU-APP_S1920'><img src={UnderWay} className='img-fluid border border-dark rounded'></img></a>
                        <p className='display-5 text-dark mt-3'>Underway Mobile App - Metro services (using React Native + Expo Framework)</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;