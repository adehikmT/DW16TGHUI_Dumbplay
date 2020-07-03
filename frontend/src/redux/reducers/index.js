import { combineReducers } from "redux";
import { musicReducer } from "./reducerMusic";
import { singerReducer } from "./reducerSinger";
import { authReducer } from "./reducerAuth";
import { transactionReducer } from "./reducerTransaction";

const reducer = combineReducers({
  singerReducer,
  musicReducer,
  authReducer,
  transactionReducer,
});

export default reducer;
