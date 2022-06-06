import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";

import {
  POST_ASSIGNPERSONNEL,
  GET_ASSIGNPERSONNEL,
  GET_ASSIGNPERSONNELS,
} from "../constants/assignPersonnelConstant";

import axios from "axios";

export const assignPersonnel = (assignReservationId, personnelId) => async (
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
      `/api/assignPersonnel/${personnelId}`,
      assignReservationId,
      config
    );
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_SUCCESS_MESSAGE,
      payload: response.data.successMessage,
    });
    dispatch({
      type: POST_ASSIGNPERSONNEL,
      payload: response.data.assignPersonnel,
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

export const getAssignPersonnel = (personnelId) => async (dispatch) => {
  try {
    // const config = {
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
    // }
    dispatch({ type: START_LOADING });
    const response = await axios.get(
      `/api/assignPersonnel/view/${personnelId}`
    );
    console.log("Action Fire!", response);
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_ASSIGNPERSONNEL, payload: response.data });
    // dispatch(getImcEquipment(response.data));
  } catch (error) {
    console.log("getImc api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getAssignPersonnels = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/assignPersonnel/view/all");
    console.log(response);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: GET_ASSIGNPERSONNELS,
      payload: response.data.assignPersonnel,
    });
  } catch (error) {
    console.log("getAssignPersonnels api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
