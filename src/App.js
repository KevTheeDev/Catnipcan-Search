import React from 'react';
import NaviBar from './components/NavigationBar.js'
import RandomGenerator from './components/RandomGenerator.js'
import Home from './components/Home.js'
import SearchPg from './components/SearchPg.js'
import { Route, BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="App">  
          <NaviBar />
          <Route exact path="/" component={Home} /> 
          <Route path="/RandomGenerator" component={RandomGenerator} />
        </div>
      </Router>
     );
  }
}
 
export default App;
