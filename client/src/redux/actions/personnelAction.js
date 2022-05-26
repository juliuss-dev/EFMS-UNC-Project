import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";
import {
  CREATE_PERSONNEL,
  GET_PERSONNELS,
  GET_PERSONNEL,
  DELETE_PERSONNEL,
} from "../constants/personnelServicesConstant";

export const createPersonnelServices = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "/api/personnelServices",
      formdata,
      config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({
      type: CREATE_PERSONNEL,
      payload: response.data.personnelServices,
    });
  } catch (error) {
    console.log("createReservation api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getPersonnels = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/personnelServices");
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_PERSONNELS,
      payload: response.data.personnelServices,
    });
  } catch (error) {
    console.log("getEquipments api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getPersonnel = (personnelId) => async (dispatch) => {
  try {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    dispatch({ type: START_LOADING });
    const response = await axios.get(`/api/personnelServices/get/${personnelId}`);
    // console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_PERSONNEL, payload: response.data });
  } catch (error) {
    console.log("getPersonnel IMC api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const deletePersonnel = (personnelId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(
      `/api/personnelServices/personnel/delete/${personnelId}`
    );
    dispatch({ type: STOP_LOADING });
    dispatch({ type: DELETE_PERSONNEL, payload: response.data });
    alert("Successfully Delete reservation");
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const GetImcPersonnel = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/personnelServices/imcPersonnel");
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_PERSONNELS,
      payload: response.data.getImc,
    });
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
