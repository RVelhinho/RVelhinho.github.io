import React, { Component } from 'react';
import './timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSimCard } from '@fortawesome/free-solid-svg-icons'
import { faTasks } from '@fortawesome/free-solid-svg-icons'

class Timeline extends Component {
    render() { 
        return ( 
            <div class="container-fluid w-75">
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <br class='my-5'></br>
                <div class="page-header text-center">
                    <h1 id="timeline">Experience</h1>
                </div>
                <hr class='w-50 my-3'/>
                <ul class="timeline">
                    <li>
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faSimCard } /></div>
                        <div class="timeline-panel">
                            <div class="timeline-heading">
                                <h4 class="timeline-title">Volunteer</h4>
                                <p class='h4'>Websummit</p>
                            </div>
                            <div class="timeline-body">
                                <p class='h5'>Nov 4 2019 - Nov 7 2019</p>
                                <p class='h6 text-secondary'>Web Summit is an annual technology conference held in Lisbon, Portugal, considered the largest tech event in the world.
                                </p>
                            </div>
                        </div>
                    </li>
                    <li class="timeline-inverted">
                        <div class="timeline-badge warning"><FontAwesomeIcon icon={ faTasks }></FontAwesomeIcon></div>
                            <div class="timeline-panel">
                                <div class="timeline-heading">
                                    <h4 class="timeline-title">Marketing and Sales Director</h4>
                                    <p class='h4'>Hipower</p>
                                </div>
                                <div class="timeline-body">
                                    <p class='h5'>2015 - 2016</p>
                                    <p class='h6 text-secondary'> Hipower is a startup company which I co-founded and participated with in the enterpreneurial education program "A Empresa", achieving finalists top 10 at the National event organized in 2016 at Lisbon, Portugal.
                                    </p>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
        );
    }
}
 
export default Timeline;