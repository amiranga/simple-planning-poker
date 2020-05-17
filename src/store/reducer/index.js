import * as ACTION_TYPES from '../actions/action-types';

const initialState = {
  vote: null
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
    default:
      return state
  }
}

export default rootReducer
