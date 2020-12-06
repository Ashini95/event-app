import LogIn from './components/auth/LogIn'
import EventPage from './components/events/EventPage'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LogIn} />
        <Route exact path="/events" component={EventPage} />
        {/* <Route path="/users" component={Users} />
        <Route path="/contact" component={Contact} />
        <Route component={Notfound} /> */}
      </Switch>
    </Router>


  );
}

export default App;
