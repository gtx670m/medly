import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './components/Home/Home';
import Login from './components/Login/Login';

class App extends Component {
   render() {
      return (
         <Router>
            <div>
               <Switch>
                  <Route exact path='/' component={Login} />
                  <Route exact path='/home' component={Home} />
               </Switch>
            </div>
         </Router>
      );
   }
}
export default App;