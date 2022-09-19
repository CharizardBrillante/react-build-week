import { GET_USERS } from "../actions";

const initialState = {
  fetchedUsers: []
}

const usersReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_USERS:
      return {
        ...state,
        fetchedUsers: [...state.fetchedUsers, action.payload]
      }
    default:
      return state;
  }
}

export default usersReducer;