import LoginModalAction, {
  CHANGE_LOGIN_MODAL_STATE,
} from "../../actions/loginModal";

interface LoginModalReducerState {
  isOpen: boolean;
}

const initialState: LoginModalReducerState = {
  isOpen: false,
};

const loginModalReducer = (
  state: LoginModalReducerState = initialState,
  action: LoginModalAction
): LoginModalReducerState => {
  switch (action.type) {
    case CHANGE_LOGIN_MODAL_STATE:
      return { ...state, isOpen: action.payload };
    default:
      return state;
  }
};

export default loginModalReducer;
