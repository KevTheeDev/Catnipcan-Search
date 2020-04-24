import React from 'react'; 
import '../styles/NavigationBar.css'
import { Link, } from 'react-router-dom';

class NavigationBar extends React.Component {
    state = {}
    render(){
    return (
        <div className="nav-list">
            <nav> 
                <ul>
                    <li>
                        <Link to="/Bookmarks"> About </Link>
                    </li>

                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    <li>
                        <Link to="/RandomGenerator"> Random Cats of Kindness </Link>
                    </li>

                    <li>
                        <Link to="/RandomGenerator"> Random Info </Link>
                    </li>
                </ul>
            </nav>
            <div id="input">
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
