import React from 'react';
import '../styles/Home.css'
import { Link, } from 'react-router-dom';

class About extends React.Component {
    state = {}
    render(){
    return (
        <div className="nav-list">
            <nav> 
                <ul>
                    <li>
                        {/* makes a link to this thank you pg .js */}
                        <Link to="/About"> This page took a lot of work and I got pages to render an image 20 min before due. Genius. </Link>
                    </li>
                </ul>
            </nav>
        </div>
  );
}
}
export default About;