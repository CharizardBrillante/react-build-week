import { LOGIN, LOGOUT } from "../actions";

const initialState = {
  loggedUser: null
}

const loggedUserReducer = (state = initialState, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        ...state,
        loggedUser: action.payload
      }
    case LOGOUT:
      return {
        ...state,
        loggedUser: action.payload
      }
    default:
      return state;
  }
}

export default loggedUserReducer;