import { combineReducers } from "redux";
import headerReducer from "./header";
import loginModalReducer from "./loginModal";

const rootReducer = combineReducers({
  loginModal: loginModalReducer,
  header: headerReducer,
});

export type Store = ReturnType<typeof rootReducer>;
export default rootReducer;
