export const types = {
  SIGNUP_REQUEST: 'AUTH/SIGNUP_REQUEST',
  SIGNUP_SUCCESS: 'AUTH/SIGNUP_SUCCESS',
  SIGNUP_FAILURE: 'AUTH/SIGNUP_FAILURE',

  LOGIN_REQUEST: 'AUTH/LOGIN_REQUEST',
  LOGIN_SUCCESS: 'AUTH/LOGIN_SUCCESS',
  LOGIN_FAILURE: 'AUTH/LOGIN_FAILURE',

  LOGOUT_REQUEST: 'AUTH/LOGOUT_REQUEST',
  LOGOUT_SUCCESS: 'AUTH/LOGOUT_SUCCESS',
  LOGOUT_FAILURE: 'AUTH/LOGOUT_FAILURE'
};

export const initialState = {
  loading: false,
  loaded: false,
  user: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    // Cases for signing a user up
    case types.SIGNUP_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.response
      };
    case types.SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.response
      };

    // Cases for logging a user in
    case types.LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.response
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.response
      };

    // Cases for logging a user out
    case types.LOGOUT_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false
      };
    case types.LOGOUT_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        user: null
      };
    case types.LOGOUT_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        error: action.response
      };
    default:
      return state;
  }
};

export const actions = {
  signup: (email, password) => ({ type: types.SIGNUP_REQUEST, email, password }),
  login: (email, password) => ({ type: types.LOGIN_REQUEST, email, password }),
  logout: () => ({ type: types.LOGOUT_REQUEST })
};
