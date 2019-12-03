import { LOADING_UI, SET_OBAT, SET_ERRORS, STOP_LOADING_UI } from "../types";
import axios from "axios";
export const fetchObat = () => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get("/obat")
    .then(res => {
      dispatch({ type: SET_OBAT, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(err => {
      dispatch({ type: STOP_LOADING_UI });
      dispatch({
        type: SET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};
export const fetchObatById = (id, history) => dispatch => {
  dispatch({ type: LOADING_UI });
  axios
    .get(`/obat/${id}`)
    .then(res => {
      dispatch({ type: SET_OBAT, payload: res.data });
      dispatch({ type: STOP_LOADING_UI });
    })
    .catch(err => {
      dispatch({ type: STOP_LOADING_UI });
      history.push("/detailproduk");
      dispatch({
        type: SET_ERRORS,
        payload: err.response ? err.response.data : err
      });
    });
};
