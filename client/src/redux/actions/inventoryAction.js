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
  GET_ALLUNCFLAG,
  GET_ALLPHFLAG,
  GET_AIRCON,
  GET_ALLFAN,
  GET_ALLGENERATOR,
  GET_ALLPLANTS,
  GET_ALLDISPLAYBOARD,
  GET_ALLMONOBLOCK,
  GET_ALLPAVILLIONTABLE,
  GET_ALLINDUSTRIALFAN,
  GET_ALLAERATRONFAN,
  GET_ALLCOOLERFAN,
  GET_ALLAIRCON,
} from "../constants/inventoryConstant";

export const createInventoryEquipment = (formData) => async (dispatch) => {
  try {
    // const config = {
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "/api/maintenanceInventory",
      formData
      // config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({
      type: CREATE_EQUIPMENTS,
      payload: response.data.maintenanceInventory,
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

export const getEquipments = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/maintenanceInventory");
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_EQUIPMENTS,
      payload: response.data.maintenanceInventory,
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

export const getEquipment = (inventoryId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      `/api/maintenanceInventory/${inventoryId}`
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_EQUIPMENT,
      payload: response.data,
    });
  } catch (error) {
    console.log("getProduct api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const deleteEquipment = (inventoryId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(
      `/api/maintenanceInventory/${inventoryId}`
    );
    dispatch({ type: STOP_LOADING });
    dispatch({ type: DELETE_EQUIPMENTS, payload: response.data });
    alert("Successfully Delete an equipment");
  } catch (error) {
    console.log("deleteEquipment api error", error);
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceUncFlag = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceUncFlag"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLUNCFLAG,
      payload: response.data.getAllMaintenanceUncFlag,
    });
  } catch (error) {
    console.log("getAllVpaSpeaker api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenancePhFlag = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenancePhFlag"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLPHFLAG,
      payload: response.data.getAllMaintenancePhFlag,
    });
  } catch (error) {
    console.log("getAllMaintenancePhFlag api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceAircon = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceAircon"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLAIRCON,
      payload: response.data.getAllMaintenanceAircon,
    });
  } catch (error) {
    console.log("getAllMaintenanceAircon api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceFan = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceFan"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLFAN,
      payload: response.data.getAllMaintenanceFan,
    });
  } catch (error) {
    console.log("getAllVpaSpeaker api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceGenerator = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceGenerator"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLFAN,
      payload: response.data.getAllMaintenanceGenerator,
    });
  } catch (error) {
    console.log("getAllMaintenanceGenerator api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenancePlants = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenancePlants"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLPLANTS,
      payload: response.data.getAllMaintenancePlants,
    });
  } catch (error) {
    console.log("getAllMaintenancePlants api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceDisplayBoard = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceDisplayBoard"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLDISPLAYBOARD,
      payload: response.data.getAllMaintenanceDisplayBoard,
    });
  } catch (error) {
    console.log("getAllMaintenanceDisplayBoard api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceMonoblock = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceMonoblock"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLMONOBLOCK,
      payload: response.data.getAllMaintenanceMonoblock,
    });
  } catch (error) {
    console.log("getAllMaintenanceMonoblock api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenancePavillionTable = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenancePavillionTable"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLPAVILLIONTABLE,
      payload: response.data.getAllMaintenancePavillionTable,
    });
  } catch (error) {
    console.log("getAllMaintenancePavillionTable api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceIndustrialFan = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceIndustrialFan"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLINDUSTRIALFAN,
      payload: response.data.getAllMaintenanceIndustrialFan,
    });
  } catch (error) {
    console.log("getAllMaintenanceIndustrialFan api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceAeratronFan = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceAeratronFan"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLAERATRONFAN,
      payload: response.data.getAllMaintenanceAeratronFan,
    });
  } catch (error) {
    console.log("getAllMaintenanceAeratronFan api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAllMaintenanceCoolerFan = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      "/api/maintenanceInventory/maintenance/getAllMaintenanceCoolerFan"
    );
    console.log(response);
    // alert(response.data.getUnits.sum_units);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ALLCOOLERFAN,
      payload: response.data.getAllMaintenanceCoolerFan,
    });
  } catch (error) {
    console.log("getAllMaintenanceCoolerFan api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
