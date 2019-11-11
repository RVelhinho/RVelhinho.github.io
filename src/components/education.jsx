import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUniversity, faBookOpen } from '@fortawesome/free-solid-svg-icons'
import './education.css';

class Education extends Component {
    render() { 
        return (
            <div class="container-fluid w-75">
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <div class="page-header text-center">
                    <h1 id="timeline">Education</h1>
                </div>
                <hr class='w-50 my-3'/>
                <ul class="timeline">
                    <li>
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faUniversity } /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Msc. in Computer Science & Engineering</h4>
                            </div>
                            <div class="timeline-body">
                                <p class='h5 text-secondary'>2019 - Present</p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faUniversity }></FontAwesomeIcon></div>
                            <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Bsc. in Computer Science & Engineering</h4>
                            </div>
                            <div class="timeline-body">
                                <p class='h5 text-secondary'>2016 - 2019</p>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faBookOpen } /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">High School</h4>
                            </div>
                            <div class="timeline-body">
                                <p class='h5 text-secondary'>2013 - 2016</p>
                            </div>
                        </div>
                    </li>
                </ul>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
            </div>
        );
    }
}
 
export default Education;