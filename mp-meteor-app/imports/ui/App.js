import React from 'react';
import {Router, Switch, Route} from 'react-router'
import Landing from './Landing';
import Donations from './dashboard/Donations';
import Authorizations from './dashboard/Authorizations';
import Settings from './dashboard/Settings';
import Account from './dashboard/Account';
import NewDonation from './NewDonations';
import {createBrowserHistory} from 'history'
import Login from './users/Login'
import SignUp from './users/SignUp'

export const browserHistory = createBrowserHistory()

const App = () => (
  <div>
    <Router history={browserHistory}>
      <Switch>
        
        <Route path="/" exact component={Landing} />

        <Switch>
          <Route path="/dashboard/" exact component={Donations} />

          <Route path="/dashboard/authorizations" component={Authorizations} />

          <Route path="/dashboard/account" component={Account} />

          <Route path="/dashboard/settings" component={Settings} />
  
          <Route path="/users/login"  component={Login} />
  
          <Route path="/users/signup" component={SignUp} />

          <Route path="/donations/new" component={NewDonation} />
      </Switch>
      </Switch>
    </Router>
  </div>
);

export default App;
