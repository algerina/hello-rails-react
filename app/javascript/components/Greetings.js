import React from "react"
import PropTypes from "prop-types"
class Greetings extends React.Component {
  render () {
    return (
      <React.Fragment>
        Message: {this.props.message}
      </React.Fragment>
    );
  }
}

Greetings.propTypes = {
  message: PropTypes.string
};
export default Greetings
