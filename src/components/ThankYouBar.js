import React from 'react'; 
import '../components/styles/NavigationBar.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';


class ThankYouBar extends React.Component {
    state = {}
    render(){
    return (
        <div className="navList">
            <nav> 
                <ul>
                    <li>
                        <Link to="/ThankYou"> Thank You </Link>
                    </li>
                </ul>
            </nav>
        </div>
  );
}
}
export default ThankYouBar;
