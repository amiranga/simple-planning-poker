import * as ACTION_TYPES from './action-types';

export const addVote = val => ({
  types: ACTION_TYPES.VOTE,
  val: val
})

export const removeVote = () => ({
  types: ACTION_TYPES.UNVOTE
})
