import React from 'react'; 
import '../components/styles/NavigationBar.css'
import { Link, } from 'react-router-dom';

class ThankYouBar extends React.Component {
    state = {}
    render(){
    return (
        <div className="nav-list">
            <nav> 
                <ul>
                    <li>
                        <Link to="/ThankYouPg"> Thank You </Link>
                    </li>
                </ul>
            </nav>
        </div>
  );
}
}
export default ThankYouBar;
