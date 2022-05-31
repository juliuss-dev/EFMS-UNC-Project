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
  GET_ALLDSLR,
  GET_ALLLENSES,
  GET_ALLTRIPOD,
} from "../constants/imcDepartmentConstant";
import axios from "axios";

export const getImc = (imcId) => async (dispatch) => {
  try {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      `/api/imcDepartmentInventory/getImc/${imcId}`
    );
    // console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_EQUIPMENT, payload: response.data });
  } catch (error) {
    console.log("getImc api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
export const getImcEquipments = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/imcDepartmentInventory");
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_EQUIPMENTS,
      payload: response.data.imcInventory,
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

export const createImcEquipment = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "/api/imcDepartmentInventory",
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
      payload: response.data.imcInventory,
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

export const deleteEquipment = (imcId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(
      `/api/imcDepartmentInventory/delete/${imcId}`
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

export const getAllImcDslr = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/imcDepartmentInventory/getAllImcDslr"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLDSLR, payload: response.data.getAllImcDslr });
  } catch (error) {
    console.log("getDslr api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllImcLense = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/imcDepartmentInventory/getAllImcLense"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLDSLR, payload: response.data.getAllImcLense });
  } catch (error) {
    console.log("getDslr api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllImcTripod = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/imcDepartmentInventory/getAllImcTripod"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLDSLR, payload: response.data.getAllImcTripod });
  } catch (error) {
    console.log("getDslr api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
