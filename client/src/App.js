import React from "react";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbarr from "./components/Navbarr";
import Login from "./components/Login";
import Register from "./components/Register";
import Young from "./components/Young";
import Old from "./components/Old";
import { Switch, Route } from "react-router-dom";
import FetchUser from "./components/FetchUser";
import ProtectedRoute from './components/ProtectedRoute';
import AboutKits from "./components/AboutKits";
import AboutBeth from "./components/AboutBeth";
import OldForm from "./components/OldForm";
import YoungForm from "./components/YoungForm"
import ContactForm from "./components/ContactForm"
import SubmittedForms from "./components/SubmittedForms";

const App = () => (
  <div className="app">
    <Navbarr />
    <FetchUser>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/junior" component={Young} />
          <Route exact path="/senior" component={Old} />
          <Route exact path="/kits" component={AboutKits} />
          <Route exact path="/beth" component={AboutBeth} />
          <Route exact path="/contact" component={ContactForm} />
          <Route exact path="/submitted-forms" component={SubmittedForms} />
          <ProtectedRoute exact path="/junior-form" component={YoungForm} />
          <ProtectedRoute exact path="/senior-form" component={OldForm} />
          <Route component={NoMatch} />
        </Switch>
      </>
    </FetchUser>
  </div>
);

export default App;
