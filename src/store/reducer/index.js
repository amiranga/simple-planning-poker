import * as ACTION_TYPES from '../actions/action-types';

const initialState = {
  vote: null,
  userName: null,
  loggedIn: false
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.VOTE:
      return {
        ...state,
        vote: action.val
      }
    case ACTION_TYPES.UNVOTE:
      return {
        ...state,
        vote: null
      }
    case ACTION_TYPES.LOGGED_IN:
      return {
        ...state,
        userName: action.userName,
        loggedIn: true
      }
    case ACTION_TYPES.LOGGED_OUT:
      return {
        ...state,
        userName: null,
        loggedIn: false
      }
    default:
      return state
  }
}

export default rootReducer
