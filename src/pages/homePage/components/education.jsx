import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import './education.css';

class Education extends Component {
    render() { 
        return (
            <div class="container-fluid h-auto">
                <div className='row w=100 h-100'>
                <div className='col-9 mx-auto my-auto'>
                <div class="page-header text-center">
                    <h1 class='h3' id="timeline">Education</h1>
                </div>
                <hr class='w-50 my-3'/>
                <ul class="timeline">
                    <li>
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faUniversity } /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h6 class="timeline-title">Msc. in Computer Science & Engineering</h6>
                            </div>
                            <div class="timeline-body">
                                <p class='h6 text-secondary'>2019 - Present</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faUniversity }></FontAwesomeIcon></div>
                            <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h6 class="timeline-title">Bsc. in Computer Science & Engineering</h6>
                            </div>
                            <div class="timeline-body">
                                <p class='h6 text-secondary'>2016 - 2019</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faBookOpen } /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h6 class="timeline-title">High School</h6>
                            </div>
                            <div class="timeline-body">
                                <p class='h6 text-secondary'>2013 - 2016</p>
                            </div>
                        </div>
                    </li>
                </ul>
                </div>
                </div>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
            </div>
        );
    }
}
 
export default Education;