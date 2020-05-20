import * as ACTION_TYPES from './action-types';
import { getuserNameFromCookie, updateCookie } from '../../services/cookie-service.js'
import { saveUser } from '../../services/database-service';

export const addVote = val => ({
  type: ACTION_TYPES.VOTE,
  val: val
})

export const removeVote = () => ({
  type: ACTION_TYPES.UNVOTE
})

export const createSession = (userName) => {
  updateCookie(userName);
  saveUser(userName);
  return {
    type: ACTION_TYPES.LOGGED_IN,
    userName: userName
  }
}

export const validateSession = () => {
  const un = getuserNameFromCookie();
  if (un) {
    return {
      type: ACTION_TYPES.LOGGED_IN,
      userName: un
    }
  } else {
    return {
      type: ACTION_TYPES.LOGGED_OUT
    }
  }
}