import React from 'react';
import NavigationBar from './components/NavigationBar.js'


import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="App">  
          <NavigationBar />
          {/* <Route exact path="/" component={Home} />  */}
          {/* <Route path="/Bookmarks" component={Bookmarks} />
          <Route exact path="/UserProfile" component={UserProfile} />   */}
        </div>
      </Router>
     );
  }
}
 
export default App;
