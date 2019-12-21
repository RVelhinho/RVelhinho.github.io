import React, { Component } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';

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
                                    <Link className="nav-link active" to="/my-page/">Home</Link>
                                </li>
                                <li className="nav-item">
                                <Link className="nav-link active" to="/my-page/projects">Projects</Link>
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