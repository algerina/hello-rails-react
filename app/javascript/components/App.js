import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Route } from "react-router-dom";
import Greeting from './Greeting';

function App() {
    return (
      <BrowserRouter>
        <Route path='/' component={Greeting} />
      </BrowserRouter>
    );
}

App.propTypes = {
  greeting: PropTypes.string
};
export default App
