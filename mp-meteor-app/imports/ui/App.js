import React from 'react';
import {Router, Switch, Route} from 'react-router'
import Landing from './Landing';
import Donations from './dashboard/Donations';
import Authorizations from './dashboard/Authorizations';
import Settings from './dashboard/Settings';
import Account from './dashboard/Account';
import NewDonation from './NewDonations';
import {createBrowserHistory} from 'history'

const browserHistory = createBrowserHistory()

const App = () => (
  <div>
    <Router history={browserHistory}>
      <Switch>
        
        <Route path="/" exact component={Landing} />

        <Route path="/dashboard/" component={Donations} />

        <Route path="/authorizations" component={Authorizations} />

        <Route path="/account" component={Account} />

        <Route path="/settings" component={Settings} />

        <Route path="/donations/new" component={NewDonation} />
      </Switch>
    </Router>
  </div>
);

export default App;
