import React, { Component } from 'react';

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
                <div className='row h-75 justify-content-center'>
                    <div className='col-8 col-sm-5 col-md-4 col-lg-4 text-center' align='center'>
                        <p className='display-4 text-dark'>under maintenance</p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects;