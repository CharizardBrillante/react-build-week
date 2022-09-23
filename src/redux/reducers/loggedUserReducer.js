import { LOGIN, LOGOUT, SAVE_TOKEN} from "../actions";

const initialState = {
  loggedUser: null,
  token : ''
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
    case SAVE_TOKEN:
      return {
        ...state,
        token : action.payload
      }
    default:
      return state;
  }
}

export default loggedUserReducer;