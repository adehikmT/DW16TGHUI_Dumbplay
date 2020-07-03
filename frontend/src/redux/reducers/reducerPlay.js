import {PLAY_MUSIC,USER_SUBSCRIBE} from "../actions/actionTypes";
  
  const initialState = {
    index: 0,
  };

  export const musicPlay = (state = initialState, action) => {
    switch (action.type) {
      case PLAY_MUSIC:
      return action.payload
      default:
        return state;
    }
  };
  
  const initialStateSub={
     userSub:0
  }

  export const userSub = (state = initialStateSub, action) => {
    switch (action.type) {
      case USER_SUBSCRIBE:
      return action.payload
      default:
        return state;
    }
  };