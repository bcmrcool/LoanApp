import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AppHub from './components/AppHub'
import ApprovalPage from './components/ApprovalPage/ApprovalPage'
import DeniedPage from './components/DeniedPage/DeniedPage'

function App() {
  return (
  	<Router>
	    <Switch>
	    	<Route exact path="/" component={AppHub} />
	    	<Route path="/approved" component={ApprovalPage} />
	    	<Route path="/denied" component={DeniedPage} />
	    </Switch>
    </Router>
  );
}

export default App;
