import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "pages/Login";
import Home from "pages/Home";
import List from "../pages/List";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/list" component={List} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
