import { configureStore } from "@reduxjs/toolkit"
import usersReducer from '../reducers/usersReducer'
import experiencesReducer from '../reducers/experiencesReducer'

const generalReducers = {
  users: usersReducer,
  experiences: experiencesReducer
}

export const store = configureStore ({
  reducer: generalReducers
});