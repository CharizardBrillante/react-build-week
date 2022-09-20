import { GET_EXPERIENCES } from "../actions";

const initialState = {
  fetchedUserExperiences: []
}

const experiencesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        fetchedUserExperiences: action.payload
      }
    default:
      return state;
  }
}

export default experiencesReducer;