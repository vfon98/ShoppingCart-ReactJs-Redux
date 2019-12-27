import axios from "../axios/axios.base";
import { USER_PROFILE } from "../api/endpoints";
import * as types from "../constants/actionTypes";

export const getUserProfile = token => {
  return dispatch => {
    axios
      .get(USER_PROFILE, { headers: { Authorization: `JWT ${token}` } })
      .then(res => {
        console.log("USER", res);
        dispatch({
          type: types.GET_USER_PROFILE,
          payload: { profile: res.data }
        });
      })
      .catch(console.log);
  };
};

export const checkLogin = () => {
  let userSession = sessionStorage.getItem("login-info");
  if (sessionStorage && userSession) {
    let userInfo = JSON.parse(userSession);
    return {
      type: types.LOGIN_OK,
      payload: userInfo
    };
  }
  return {
    type: types.SESSION_NOT_FOUND
  };
};