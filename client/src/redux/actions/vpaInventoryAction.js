import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";
import {
  GET_EQUIPMENT,
  GET_EQUIPMENTS,
  CREATE_EQUIPMENTS,
  DELETE_EQUIPMENTS,
  GET_ALLLIGHTS,
  GET_ALLMICROPHONE,
  GET_ALLPROJECTORSCREEN,
  GET_ALLPROJECTOR,
  GET_ALLBLUETOOTHSPEAKER,
  GET_ALLSPEAKER,
} from "../constants/vpaDepartmentConstant";
import axios from "axios";

export const getVpa = (vpaId) => async (dispatch) => {
  try {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    dispatch({ type: START_LOADING });
    const response = await axios.get(`/api/vpaDepartmentInventory/${vpaId}`);
    // console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_EQUIPMENT, payload: response.data });
  } catch (error) {
    console.log("getVpa api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
export const getVpaEquipments = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/vpaDepartmentInventory");
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_EQUIPMENTS,
      payload: response.data.vpaInventory,
    });
  } catch (error) {
    console.log("getVpa api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const createVpaEquipment = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "/api/vpaDepartmentInventory",
      formdata,
      config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({
      type: CREATE_EQUIPMENTS,
      payload: response.data.vpaInventory,
    });
  } catch (error) {
    console.log("createEquipment api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const deleteEquipment = (vpaId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(
      `/api/vpaDepartmentInventory/delete/${vpaId}`
    );
    dispatch({ type: STOP_LOADING });
    dispatch({ type: DELETE_EQUIPMENTS, payload: response.data });
    alert("Successfully Delete reservation");
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllVpaSpeaker = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/vpaDepartmentInventory/vpa/getAllVpaSpeaker"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLSPEAKER, payload: response.data.getAllVpaSpeaker });
  } catch (error) {
    console.log("getAllVpaSpeaker api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllVpaBluetoothSpeaker = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/vpaDepartmentInventory/vpa/getAllVpaBluetoothSpeaker"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLBLUETOOTHSPEAKER,
      payload: response.data.getAllVpaBluetoothSpeaker,
    });
  } catch (error) {
    console.log("getAllVpaBluetoothSpeaker api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllVpaProjector = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/vpaDepartmentInventory/vpa/getAllVpaProjector"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLPROJECTOR,
      payload: response.data.getAllVpaProjector,
    });
  } catch (error) {
    console.log("getAllVpaProjector api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllVpaProjectorScreen = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/vpaDepartmentInventory/vpa/getAllVpaProjectorScreen"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLPROJECTORSCREEN,
      payload: response.data.getAllVpaProjectorScreen,
    });
  } catch (error) {
    console.log("getAllVpaProjectorScreen api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllVpaMicrophone = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/vpaDepartmentInventory/vpa/getAllVpaMicrophone"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLMICROPHONE,
      payload: response.data.getAllVpaMicrophone,
    });
  } catch (error) {
    console.log("getAllVpaMicrophone api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllVpaLights = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/vpaDepartmentInventory/vpa/getAllVpaLights"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLLIGHTS, payload: response.data.getAllVpaLights });
  } catch (error) {
    console.log("getAllVpaLights api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
