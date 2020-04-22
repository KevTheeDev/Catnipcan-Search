import React from 'react'; 
import '../components/styles/NavigationBar.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

class NavigationBar extends React.Component {
    state = {}
    render(){
    return (
        <div className="navList">
            <nav> 
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>

                    <li>
                        <Link to="/Bookmarks">Bookmarks </Link>
                    </li>
                    
                    <li>
                        <Link to="/RandomGenerator"> Random Cats of Kindness </Link>
                    </li>
                </ul>
            </nav>
            <div>
                <form>
                    <label> 
                        <h3>Search</h3> 
                        <input />
                        {/* <input placeholder="search cat species"> Search </input>   */}
                    </label>     
                </form>
                    
            </div>

        </div>
  );
}
}
export default NavigationBar;
