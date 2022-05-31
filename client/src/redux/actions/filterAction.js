import { GET_EQUIPMENTS } from "../constants/inventoryConstant";
import { STOP_LOADING } from "../constants/loadingConstant";
import { SHOW_ERROR_MESSAGE } from "../constants/messageConstant";
import axios from "axios";
export const getMaintenanceInventoryByFilter = (arg) => async (dispatch) => {
  try {
    const response = await axios.post("/api/filter/search", arg);
    dispatch({
      type: GET_EQUIPMENTS,
      payload: response.data.maintenance,
    });
  } catch (error) {
    console.log("getMaintenanceInventoryByFilter api error", error);
    dispatch({ type: STOP_LOADING });
    dispatch({
      type: SHOW_ERROR_MESSAGE,
      payload: error.response.data.errorMessage,
    });
  }
};
