import axios from "axios";
import { START_LOADING, STOP_LOADING } from "../constants/loadingConstant";
import {
  SHOW_SUCCESS_MESSAGE,
  SHOW_ERROR_MESSAGE,
} from "../constants/messageConstant";

import {
  GET_MAINTENANCE,
  GET_PHFLAG,
  GET_UNCFLAG,
  GET_MONOBLOCK,
  GET_PAVILLIONTABLE,
} from "../constants/getAllEquipmentConstant";

export const getMaintenance = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/getAllEquipments/getMaintenance");
    // const resp = await axios.get("/api/getAllEquipments/getPhFlag");
    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_MAINTENANCE, payload: response.data });
    // dispatch({ type: GET_PHFLAG, payload: resp.data });
  } catch (error) {
    console.log("getIct api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};

export const getPhFlag = () => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const response = await axios.get("/api/getAllEquipments/getPhFlag");

    dispatch({ type: STOP_LOADING });
    dispatch({ type: GET_PHFLAG, payload: response.data.phFlag });
  } catch (error) {
    console.log("getIct api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
