import React from 'react';
import '../src/components/NavigationBar.css';
import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <nav> 
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/Bookmarks">Bookmarks </Link>
          </li>

          <li>
            <Link to="/UserProfile">UserProfile</Link>
          </li>

          <li>
            <Link to="/Login">Login</Link>
          </li>

        </ul>
      </nav>
    </div>
  );
}

export default App;
