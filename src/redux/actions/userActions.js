import {
  LOADING_UI,
  STOP_LOADING_UI,
  CLEAR_ERRORS,
  SET_USER,
  SET_ERRORS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED
} from "../types";
import axios from "axios";

export const loginUser = (userData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/login", userData)
    .then(res => {
      console.log(res.data);
      setAuthorizationHeader(res.data);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({
        type: SET_USER,
        payload: { userInfo: res.data }
      });
      history.push("/");
    })
    .catch(err => {
      dispatch({ type: STOP_LOADING_UI });
      dispatch({
        type: SET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};
export const signupUser = (newUserData, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/register", newUserData)
    .then(res => {
      setAuthorizationHeader(res.data);
      dispatch({ type: CLEAR_ERRORS });
      dispatch({ type: SET_USER, payload: { ...res.data.userInfo } });
      history.push("/dashboard");
    })
    .catch(err => {
      dispatch({ type: STOP_LOADING_UI });
      dispatch({
        type: SET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};

export const logoutUser = () => dispatch => {
  dispatch({ type: CLEAR_ERRORS });
  localStorage.removeItem("account");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: SET_UNAUTHENTICATED });
};
const setAuthorizationHeader = payload => {
  const account = payload;
  localStorage.setItem("account", JSON.stringify(account));
  axios.defaults.headers.common["Authorization"] = `Bearer ${payload.token}`;
};
