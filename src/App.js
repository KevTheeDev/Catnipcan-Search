import React from 'react';
import NavigationBar from './components/NavigationBar.js'
import RandomGenerator from './components/RandomGenerator.js'
import Home from './components/Home.js'
import ThankYouBar from './components/ThankYouBar.js'

import SearchPg from './components/SearchPg.js'
import { Route, BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="App">  
          <NavigationBar />
          <Route exact path="/" component={Home} /> 
          <Route path="/RandomGenerator" component={RandomGenerator} />
          <ThankYouBar />
        </div>
      </Router>
     );
  }
}
 
export default App;
