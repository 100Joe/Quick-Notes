import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Notes from './Components/Notes';
import Create from './Components/Create';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Notes />
        </Route>
        <Route path='/create'>
          <Create />
        </Route>
      </Switch>
    </Router>
  );
}

export default App

