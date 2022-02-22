import {SET_AUDIO_ITEM} from '../actions/actionTypes';
const initialState = null;

const reducer = (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case SET_AUDIO_ITEM:
      return payload;
    default:
      return state;
  }
};

export default reducer;
