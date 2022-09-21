export const GET_USERS = "GET_USERS";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const NEW_EXPERIENCE = "NEW_EXPERIENCE";
export const LOGIN = "LOGIN";

export const getUsersAction = (users) => ({
    type: GET_USERS,
    payload: users
})

export const getExperiencesAction = (exp) => ({
  type: GET_EXPERIENCES,
  payload: exp
})

export const newExperienceAction = (exp) => ({
  type: NEW_EXPERIENCE,
  payload: exp
})

export const loginAction = (usr) => ({
  type: LOGIN,
  payload: usr
})