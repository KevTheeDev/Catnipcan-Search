import React from 'react';
import NavigationBar from './components/NavigationBar.js'
import RandomGenerator from './components/RandomGenerator.js'
import Home from './components/Home.js'
import ThankYouBar from './components/ThankYouBar.js'
import ThankYouPg from './components/ThankYouPg.js';
import SearchPg from './components/SearchPg.js'
import About from './components/About.js';
import { Route, BrowserRouter as Router} from 'react-router-dom';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <Router>
        <div className="App">  
          <NavigationBar />
          {/* Route path take me to a specific page */}
            {/* exact path means the route takes me to exactly that page and nowhere else, so there is no mixup */}
            {/* component={ take me to the component/pg creater by the developer } */}
            {/* this is only for fluff I actually don't need it as of yet */}
            {/* <Route path="/SearchPg" component={SearchPg} />   */}
          <Route exact path="/" component={Home} /> 
          <Route path="/RandomGenerator" component={RandomGenerator} />
          <Route exact path="/ThankYouPg" component={ThankYouPg} />
          <Route exact path="/RandomGenerator/:id" component={RandomGenerator} />
          {/* <Route exact path="/About" component={About} /> */}
          
          
          
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <ThankYouBar />
        </div>
      </Router>
     );
  }
}
 
export default App;
