import React from 'react'; 
import './NavigationBar.css'
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function App() {
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
                        <Link to="/UserProfile"> Random Cats of Kindness </Link>
                    </li>
                </ul>
            </nav>
        </div>
  );
}

export default App;
