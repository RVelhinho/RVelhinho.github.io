import React, { Component } from 'react';

class Buttons extends Component {
    state = {  }
    render() { 
        return (
            <div className='container-fluid'>
                <div className='row text-center my-5'>
                    <div className='col-7 col-sm-8 col-md-4'>
                        <a href="../../../assets/downloads/CV_Ricardo_Velhinho.pdf" download><button type='button' className='btn btn-dark btn-lg'>Download CV</button></a>
                    </div>
                    <div className='col-2 col-sm-1 col-md-1'>
                        <a href="mailto:ricvelhinho@gmail.com"><button type='button' className='btn btn-dark btn-lg'>Contact</button></a>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Buttons;