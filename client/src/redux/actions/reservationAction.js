import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";
import {
  GET_RESERVATION,
  GET_RESERVATIONS,
  CREATE_RESERVATION,
  DELETE_RESERVATION,
  GET_IMCDOCUMENTATION,
} from "../constants//reservationConstant";
import axios from "axios";

export const getReservation = (reservationId) => async (dispatch) => {
  try {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    dispatch({ type: START_LOADING });
    const response = await axios.get(`/api/reservation/${reservationId}`);
    // console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_RESERVATION, payload: response.data });
  } catch (error) {
    console.log("getReservation api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
export const getReservations = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/reservation");
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_RESERVATIONS, payload: response.data.reservation });
  } catch (error) {
    console.log("getReservations api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const createReservation = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post("/api/reservation", formdata, config);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({ type: CREATE_RESERVATION, payload: response.data.reservation });
  } catch (error) {
    console.log("createReservation api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const deleteReservation = (reservationId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(`/api/reservation/${reservationId}`);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: DELETE_RESERVATION, payload: response.data });
    alert("Successfully Delete reservation");
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getImcDocumentation = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/reservation/reservation/getImcDocumentation"
    );
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_IMCDOCUMENTATION,
      payload: response.data.getImcDocumentation,
    });
  } catch (error) {
    console.log("getImc api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
