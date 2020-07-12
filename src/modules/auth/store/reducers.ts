import { AuthState, initialState, AuthActions } from ".";

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActions.AuthActionTypes
): AuthState => {
  switch (action.type) {
    case AuthActions.LOGIN_SUCCESS_TYPE:
    case AuthActions.LOAD_AUTH_TOKEN_SUCCESS_TYPE:
      return { ...state, authToken: action.payload };
    case AuthActions.GET_USER_SUCCESS_TYPE:
      return { ...state, user: action.payload };
    case AuthActions.GET_USER_FAILURE_TYPE:
      return { ...state, userError: action.payload };
    default:
      return state;
  }
};
