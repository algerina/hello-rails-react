const initState = {
  message: " "
};
const FETCH_GREETING = "FETCH_GREETING";

const url = "http://localhost:3000/v1/greetings";

const greetingReducer = (state = initState, action) => {
  switch (action.type) {
    case FETCH_GREETING:
      return action.payload;
    default:
      return state;
  }
};

export const fetchGreeting = () => async dispatch => {
  await fetch(url)
    .then(res => res.json())
    .then(data =>  {      
      dispatch({ type: FETCH_GREETING, payload: 
        {
          message: data.message
        }
       });
    });
};

export default greetingReducer;