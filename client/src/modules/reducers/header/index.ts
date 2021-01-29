import { User } from "../../../lib/payloads/header";
import HeaderAction, { SET_USER } from "../../actions/header";

interface HeaderReducerState extends User {}

const initialState: HeaderReducerState = null;

const headerReducer = (
  state: HeaderReducerState = initialState,
  action: HeaderAction
): HeaderReducerState => {
  switch (action.type) {
    case SET_USER:
      return action.payload;
    default:
      return state;
  }
};

export default headerReducer;
