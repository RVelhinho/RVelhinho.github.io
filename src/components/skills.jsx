import React, { Component } from 'react';

class Skills extends Component {
    render() { 
        return (
            <div class='container-fluid w-100 my-5'>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <div class='row'>
                    <p class='h1 text-dark w-100 text-center'>Skills</p>
                    <div class='col-5 mx-auto'>
                        <br/>
                        <br/>
                        <p class='h5 text-dark'>HTML</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='h5 text-dark'>CSS</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='h5 text-dark'>JavaScript</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='h5 text-dark'>Python</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class='col-5 mx-auto'>
                        <br/>
                        <br/>
                        <p class='h5 text-dark'>React</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='h5 text-dark'>BootStrap</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='h5 text-dark'>Adobe Ilustrator</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Skills;