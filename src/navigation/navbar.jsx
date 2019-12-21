import React, { Component } from 'react';
import './navbar.css';

class NavBar extends Component {
    render() { 
        return (  
            <React.Fragment>
                <div className='container-fluid container-nav h-auto pb-0'>
                    <nav id="mynav" className="navbar fixed-top navbar-expand-lg navbar-dark ">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav w-100 justify-content-center">
                                <li className="nav-item">
                                    <a className="nav-link active" href="/my-page/">Home</a>
                                </li>
                                <li className="nav-item">
                                <a className="nav-link active" href="projects">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link disabled" href="/contacts">Contacts</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </React.Fragment>
        );
    }
}
 
export default NavBar;