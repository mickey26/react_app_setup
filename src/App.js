import logo from "./logo.svg";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import React from "react";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(reducers, {}, applyMiddleware(thunk));
class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <LandingPage />
      </Provider>
    );
  }
}

export default App;
