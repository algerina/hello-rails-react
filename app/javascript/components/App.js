import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Greeting from "./Greeting";
import { Provider } from "react-redux";
import store from "../redux/configureStore";

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={ <Greeting /> } />
          </Routes>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App