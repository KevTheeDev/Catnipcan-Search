import React from 'react';
import NavigationBar from './components/NavigationBar.js'

import { Route, BrowserRouter as Router, Link, Switch, } from 'react-router-dom';

class App extends React.Component {
  state = {  }
  render() { 
    return ( 
      <NavigationBar />
     );
  }
}
 
export default App;
