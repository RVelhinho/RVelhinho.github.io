import React, { Component } from 'react';
import Youtube from '../../assets/images/youtube_trends.png';
import UnderWay from '../../assets/images/underway.png';

class Projects extends Component {
    state = {  }
    render() { 
        return(
            <div className='container-fluid h-auto'>
                <div className='row h-25'>
                    <div className='col-12 text-center'>
                        <p className='display-3 text-dark'>Projects</p>
                    </div>
                </div>
                <hr className='w-75 my-4'/>
                <div className='row w-100 h-75 justify-content-center mt-5'>
                    <div className='col-8 col-sm-5 col-md-4 col-lg-4 text-center' align='center'>
                        <a href='https://github.com/ggalambas/1920-MEIC-VI'><img src={Youtube} className='img-fluid border border-dark rounded'></img></a>
                        <p className='display-5 text-dark mt-3'>Youtube Trends Data Visualization (using D3 library)</p>
                    </div>
                    <div className='col-8 col-sm-5 col-md-4 col-lg-4 text-center' align='center'>
                        <a href='https://github.com/TheMrKiko/CCU-APP_S1920'><img src={UnderWay} className='img-fluid border border-dark rounded'></img></a>
                        <p className='display-5 text-dark mt-3'>Underway Mobile App - Metro services (using React Native + Expo Framework)</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;