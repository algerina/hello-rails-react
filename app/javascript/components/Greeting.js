import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { fetchGreeting } from "../redux/greetings/greetings";

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGreeting());
  },[]);

  const message = useSelector(state => state.greetingReducer);

  return (
    <React.Fragment>
      Message: {message.message}
    </React.Fragment> 
  );
}

Greeting.propTypes = {
  message: PropTypes.string
};
export default Greeting
