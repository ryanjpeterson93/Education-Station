import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import Young from "./components/Young";
import Old from "./components/Old";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from './components/ProtectedRoute';
import AboutKits from "./components/AboutKits";
import AboutBeth from "./components/AboutBeth";
import OldForm from "./components/OldForm";
import YoungForm from "./components/YoungForm"

const App = () => (
  <div>
    <Navbar />
    <FetchUser>
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/young" component={Young} />
          <Route exact path="/old" component={Old} />
          <Route exact path="/kits" component={AboutKits} />
          <Route exact path="/beth" component={AboutBeth} />
          <ProtectedRoute exact path="/young-form" component={YoungForm} />
          <ProtectedRoute exact path="/old-form" component={OldForm} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </FetchUser>
  </div>
);

export default App;
