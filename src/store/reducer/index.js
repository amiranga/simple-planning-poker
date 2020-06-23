import * as ACTION_TYPES from '../actions/action-types';

const initialState = {
  vote: null,
  userName: null,
  loggedIn: false,
  users: {}
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
    case ACTION_TYPES.REVEAL_VOTES:
      return {
        ...state,
        finalVotes: action.votes
      }
    case ACTION_TYPES.LOGGED_IN:
      return {
        ...state,
        userName: action.userName,
        userId: action.userId,
        loggedIn: true
      }
    case ACTION_TYPES.LOGGED_OUT:
      return {
        ...state,
        userName: null,
        loggedIn: false
      }
    case ACTION_TYPES.ROOM_CREATED:
      return {
        ...state,
        roomId: action.roomId
      }
    case ACTION_TYPES.LOAD_ROOM:
      return {
        ...state,
        room: action.room
      }
    case ACTION_TYPES.ADD_USER:
      const newUser = action.newUser;
      const existingUsers = { ...state.users };
      existingUsers[newUser.userId] = newUser
      return {
        ...state,
        users: existingUsers
      }
    default:
      return state
  }
}

export default rootReducer
