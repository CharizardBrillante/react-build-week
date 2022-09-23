export const GET_USERS = "GET_USERS";
export const EDIT_USER = "EDIT_USER";
export const UPDATE_FETCHED_USERS = "UPDATE_FETCHED_USERS";
export const GET_EXPERIENCES = "GET_EXPERIENCES";
export const NEW_EXPERIENCE = "NEW_EXPERIENCE";
export const EDIT_EXPERIENCE = "EDIT_EXPERIENCE";
export const LOGIN = "LOGIN";
export const LOGOUT = "LOGOUT";
export const SAVE_TOKEN = "SAVE_TOKEN";

export const getUsersAction = (users) => ({
    type: GET_USERS,
    payload: users
})

export const editUserAction = (user) => ({
  type: EDIT_USER,
  payload: user
})

export const updateFetchedUsers = (user) => ({
  type: UPDATE_FETCHED_USERS,
  payload: user
})

export const getExperiencesAction = (exp) => ({
  type: GET_EXPERIENCES,
  payload: exp
})

export const newExperienceAction = (exp) => ({
  type: NEW_EXPERIENCE,
  payload: exp
})

export const editExperienceAction = (exp) => ({
  type: EDIT_EXPERIENCE,
  payload: exp
})

export const loginAction = (usr) => ({
  type: LOGIN,
  payload: usr
})

export const logoutAction = () => ({
  type: LOGOUT,
  payload: null
})

export const saveTokenAction = (token) => ({
  type: SAVE_TOKEN,
  payload: token

})
