import { combineReducers } from "redux";
import loginModalReducer from "./loginModal";

const rootReducer = combineReducers({
  loginModal: loginModalReducer,
});

export type Store = ReturnType<typeof rootReducer>;
export default rootReducer;
