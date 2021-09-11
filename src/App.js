import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";

const store = createStore(reducers, {}, applyMiddleware(thunk));
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Switch>
            <Route exact path='/' component={LandingPage} />
            <Route path='/about' component={AboutPage} />
            <Route path='/home' component={HomePage} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
