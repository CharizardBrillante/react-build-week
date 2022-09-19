export const GET_USERS = "GET_USERS";
export const GET_EXPERIENCES = "GET_EXPERIENCES";

export const getUsersAction = (users) => ({
    type: GET_USERS,
    payload: users
})

export const getExperiencesAction = (exp) => ({
  type: GET_EXPERIENCES,
  payload: exp
})
