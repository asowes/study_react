import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "pages/Login";
import Home from "pages/Home";

function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/" component={Home} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
