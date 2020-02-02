import React, { Component } from 'react';
import './skills.css';

class Skills extends Component {
    render() { 
        return (
            <div class='container-fluid my-5 h-auto'>
                <div class='row w-100 h-100 justify-content-center'>
                    <p class='h3 text-dark w-100 text-center sktext'>Skills</p>
                    <div class='col-5 ml-4'>
                        <br/>
                        <br/>
                        <p class='text-dark sktext2'>HTML</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='text-dark sktext2'>CSS</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '80%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='text-dark sktext2'>JavaScript</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '70%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='text-dark sktext2'>Python</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '50%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <div class='col-5'>
                        <br/>
                        <br/>
                        <p class='text-dark sktext2'>React</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='text-dark sktext2'>BootStrap</p>
                        <div class="progress">
                            <div class="progress-bar bg-warning" role="progressbar" style={{width: '60%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <br/>
                        <p class='text-dark sktext2'>Adobe Ilustrator</p>
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