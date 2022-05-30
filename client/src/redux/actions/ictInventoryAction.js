import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";
import {
  CREATE_EQUIPMENTS,
  GET_EQUIPMENTS,
  GET_EQUIPMENT,
  DELETE_EQUIPMENTS,
  GET_COMPUTER,
  GET_ALLDESKTOP,
  GET_ALLLAPTOP,
  GET_ALLKEYBOARD,
  GET_ALLMOUSE,
} from "../constants/ictDepartmentConstant.js";

export const getIct = (ictId) => async (dispatch) => {
  try {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      `/api/ictDepartmentInventory/getIctId/${ictId}`
    );
    // console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_EQUIPMENT, payload: response.data });
  } catch (error) {
    console.log("getIct api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getIctEquipments = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/ictDepartmentInventory");
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_EQUIPMENTS,
      payload: response.data.ictInventory,
    });
  } catch (error) {
    console.log("getIct api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const createIctEquipment = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "/api/ictDepartmentInventory",
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
      payload: response.data.ictInventory,
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

export const deleteEquipment = (ictId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(`/api/ictDepartmentInventory/${ictId}`);
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

export const getComputer = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/ictDepartmentInventory/getComputer");
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_COMPUTER, payload: response.data });
  } catch (error) {
    console.log("getComputer api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllIctDekstop = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/ictDepartmentInventory/getAllIctDekstop"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLDESKTOP, payload: response.data.getDesktop });
  } catch (error) {
    console.log("getComputer api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllIctLaptop = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/ictDepartmentInventory/getAllIctLaptop"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLLAPTOP, payload: response.data.getAllIctLaptop });
  } catch (error) {
    console.log("getAllIctLaptop api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllIctMouse = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/ictDepartmentInventory/getAllIctMouse"
    );
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ALLMOUSE, payload: response.data.getAllIctMouse });
  } catch (error) {
    console.log("getAllIctMouse api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllIctKeyboard = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/ictDepartmentInventory/getAllIctKeyboard"
    );
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLKEYBOARD,
      payload: response.data.getAllIctKeyboard,
    });
  } catch (error) {
    console.log("getAllIctKeyboard api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
