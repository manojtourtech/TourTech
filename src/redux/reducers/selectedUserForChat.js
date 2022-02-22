import {
  SELECT_USER_FOR_CHAT,
  SET_PUBLIC_KEY,
  LOGIN_USER_DETAILS,
} from '../actions/actionTypes';
const initialState = {
  publicKey: null,
  userId: null,
  userName: null,
  profilePicPath: null,
  onlineStatus: false,
  userDetails: {},
};

const reducer = (state = initialState, action) => {
  console.log('selected user for chat action =', action);
  switch (action.type) {
    case SELECT_USER_FOR_CHAT:
      return {
        ...state,
        userId: action.data.userID
          ? action.data.userID
          : action.data.recipientId,
        userName: action.data.displayName,
        profilePicPath: action.data.picturePath,
      };

    case SET_PUBLIC_KEY:
      return {
        ...state,
        publicKey: action.publicKey,
        onlineStatus: action.onlineStatus,
      };

    default:
      return state;
  }
};

export default reducer;
