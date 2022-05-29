import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";
import { GET_USERS, DELETE_USER, GET_USER } from "../constants/userConstant";

export const getUsers = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/auth/users");
    dispatch({ type: GET_USERS, payload: response.data.getUsers });
  } catch (error) {
    console.log("GET USERS ERROR", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(`/api/auth/signup/${userId}`);
    dispatch({ type: GET_USER, payload: response.data });
  } catch (error) {
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.reponse.data.errorMessage,
    });
  }
};
export const deleteUser = (userId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(`/api/auth/delete/${userId}`);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: DELETE_USER, payload: response.data });
    alert("Successfully Delete a User");
  } catch (error) {
    console.log("DELETE USER ERROR", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
