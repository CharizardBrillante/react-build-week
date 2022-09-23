import { EDIT_USER, GET_USERS, UPDATE_FETCHED_USERS } from "../actions";

const initialState = {
  fetchedUsers: [],
  userChanges: {
    name: "",
    surname: "",
    email: "",
    bio: "",
    title: "",
    area: "",
  },
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        fetchedUsers: [...state.fetchedUsers, action.payload],
      };
    case UPDATE_FETCHED_USERS: {
      return {
        ...state,
        fetchedUsers: [
          ...state.fetchedUsers,
          (state.fetchedUsers[
            state.fetchedUsers[
              state.fetchedUsers.indexOf(
                state.fetchedUsers.filter((el) => el._id === action.payload._id)
              )
            ]
          ] = action.payload),
        ],
      };
    }
    case EDIT_USER:
      return {
        ...state,
        userChanges: action.payload
      };
    default:
      return state;
  }
};

export default usersReducer;
