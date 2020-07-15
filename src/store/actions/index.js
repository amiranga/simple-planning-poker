import * as ACTION_TYPES from './action-types';
import { getuserNameFromCookie, updateCookie } from '../../services/cookie-service.js'
import { saveRoom, saveVote, getRoom, watchRoomStatus } from '../../services/database-service';
import { generateUserId, generateRoomId } from '../../services/uid-service';
import User from '../../dto/user';
import Room from '../../dto/room';

export const addVote = (roomId, userId, val) => {
  saveVote(roomId, userId, val);
  return {
    type: ACTION_TYPES.VOTE,
    val: val
  }
}

export const removeVote = () => ({
  type: ACTION_TYPES.UNVOTE
})

export const createSession = (userName) => {
  const userId = generateUserId();
  const user = new User(userName, userId);
  updateCookie(user);
  return {
    type: ACTION_TYPES.LOGGED_IN,
    userName: userName,
    userId: userId
  }
}

export const createRoom = (roomName, gameFormat, adminUserId) => {
  const roomId = generateRoomId();
  const room = new Room(roomId, roomName, gameFormat, adminUserId);
  saveRoom(room);
  return {
    type: ACTION_TYPES.ROOM_CREATED,
    roomId: roomId
  }
}

export const loadRoom = (roomId) => {
  return (dispatch) => {
      getRoom(roomId, (room) => {
        dispatch({
          type: ACTION_TYPES.LOAD_ROOM,
          room: room
        });
      })
  };
}

export const watchRoom = (roomId) => {
  return (dispatch) => {
    watchRoomStatus(roomId, (roomStatus) => {
      if (roomStatus && roomStatus.status === 'FINISHED') {
        dispatch({
          type: ACTION_TYPES.REVEAL_VOTES,
          voteEnded: true
        });
      } else if (roomStatus && roomStatus.status === 'ACTIVE') {
        dispatch({
          type: ACTION_TYPES.REVEAL_VOTES,
          voteEnded: false
        });
      }
    })
  };
}

export const validateSession = () => {
  const user = getuserNameFromCookie();
  if (user) {
    return {
      type: ACTION_TYPES.LOGGED_IN,
      userName: user.userName,
      userId: user.userId
    }
  } else {
    return {
      type: ACTION_TYPES.LOGGED_OUT
    }
  }
}

export const populateUsers = (newUser) => {
  return {
    type: ACTION_TYPES.ADD_USER,
    newUser: newUser
  }
}