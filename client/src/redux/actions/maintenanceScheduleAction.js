import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";
import {
  GET_SCHEDULE,
  GET_SCHEDULES,
  CREATE_SCHEDULE,
  DELETE_SCHEDULE,
  PUT_EQUIPMENTSCHEDULE,
} from "../constants/maintenanceScheduleConstant";
import axios from "axios";

export const getMSchedule = (mScheduleId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      `/api/imcDepartmentInventory/getImc/${mScheduleId}`
    );

    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_SCHEDULE, payload: response.data });
  } catch (error) {
    console.log("get Maintenance Schedule api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
export const getMSchedules = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/maintenanceSchedule");
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_SCHEDULES,
      payload: response.data.mSchedule,
    });
  } catch (error) {
    console.log("get Maintenance Schedule api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const createMaintenanceSchedule = (formdata) => async (dispatch) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    dispatch({ type: START_LOADING });
    const response = await axios.post(
      "/api/maintenanceSchedule",
      formdata,
      config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({
      type: CREATE_SCHEDULE,
      payload: response.data.imcInventory,
    });
  } catch (error) {
    console.log("createScheduleapi error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const deleteSchedule = (mScheduleId) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.delete(
      `/api/maintenanceSchedule/${mScheduleId}`
    );
    dispatch({ type: STOP_LOADING });
    dispatch({ type: DELETE_SCHEDULE, payload: response.data });
    alert("Successfully Delete reservation");
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const updateMaintenanceEquipment = (schedules, mScheduleId) => async (
  dispatch
) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.put(
      `/api/maintenanceSchedule/putEquipmentId/${mScheduleId}`,
      schedules
    );
    console.log("Action Fire Update!", response);

    dispatch({ type: STOP_LOADING });
    dispatch({ type: PUT_EQUIPMENTSCHEDULE, payload: response.data });
    // dispatch(updateImc(response.data));
    // alert("Update Successfully");
    console.log("Successfully Update imc equipment");
  } catch (error) {
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
