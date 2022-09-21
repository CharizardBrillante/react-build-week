import { GET_EXPERIENCES, NEW_EXPERIENCE, EDIT_EXPERIENCE } from "../actions";

const initialState = {
  fetchedUserExperiences: [],
  newExperience: {
    role: "",
    company: "",
    area: "",
    startDate: "",
    endDate: "",
    description: "",
    username: ""
  }
}

const experiencesReducer = (state = initialState, action) => {
  switch(action.type) {
    case GET_EXPERIENCES:
      return {
        ...state,
        fetchedUserExperiences: action.payload
      }
      case NEW_EXPERIENCE:
        return {
          ...state,
          newExperience: {
            ...state.newExperience,
            ...action.payload
          }
        }
        case EDIT_EXPERIENCE:
          return {
            ...state,
            newExperience: action.payload
          }
    default:
      return state;
  }
}

export default experiencesReducer;