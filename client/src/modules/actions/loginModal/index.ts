export const CHANGE_LOGIN_MODAL_STATE = "loginModal/CHANGE_LOGIN_MODAL_STATE" as const;

export const changeLoginModalState = (isOpen: boolean) => ({
  type: CHANGE_LOGIN_MODAL_STATE,
  payload: isOpen,
});

type LoginModalAction = ReturnType<typeof changeLoginModalState>;

export default LoginModalAction;
