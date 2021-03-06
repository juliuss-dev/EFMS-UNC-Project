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
  POST_ASSIGNIMCPERSONNEL,
  GET_ICTPERSONNELS,
  GET_IMCPERSONNELS,
  GET_MAINTENANCEPERSONNELS,
  GET_VPAPERSONNELS,
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
    const response = await axios.get(
      `/api/personnelServices/get/${personnelId}`
    );
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
      type: GET_IMCPERSONNELS,
      payload: response.data.getImc,
    });
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const GetIctPersonnel = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/personnelServices/ictPersonnel");
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_PERSONNELS,
      payload: response.data.getIct,
    });
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const GetVpaPersonnel = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/personnelServices/vpaPersonnel");
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_PERSONNELS,
      payload: response.data.getVpa,
    });
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const GetMaintenancePersonnel = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/personnelServices/maintenancePersonnel"
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_PERSONNELS,
      payload: response.data.getMaintenance,
    });
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const assignImcDocumentationPersonnel = (personnelId) => async (
  dispatch
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      `/api/personnelServices/personnelServices/Assign/${personnelId}`,
      // formdata,
      config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: POST_ASSIGNIMCPERSONNEL,
      payload: response.data,
    });
  } catch (error) {
    console.log("Assigning of Personnel api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
