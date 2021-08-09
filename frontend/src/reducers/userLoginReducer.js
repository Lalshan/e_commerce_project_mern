import {
  USER_LOGIN_FAILD,
  USER_LOGIN_LOGOUT,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
} from "../constants/userConstant";
export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true };
    case USER_LOGIN_SUCCESS:
      return { loading: false, userInfo: action.payload };
    case USER_LOGIN_FAILD:
      return { loading: false, error: action.payload };
    case USER_LOGIN_LOGOUT:
      return {};
    default:
      return state;
  }
};
