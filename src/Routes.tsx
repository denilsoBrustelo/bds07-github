import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import Navbar from 'components/Navbar';
import UserGitSearch from 'pages/UserGitSearch';

const Routes = () => (
  <BrowserRouter>
    <Navbar />
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Route path="/cepsearch">
        <UserGitSearch />
      </Route>
    </Switch>
  </BrowserRouter>
);

export default Routes;
