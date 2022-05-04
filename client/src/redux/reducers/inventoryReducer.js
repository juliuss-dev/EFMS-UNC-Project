import {
  CREATE_EQUIPMENTS,
  GET_EQUIPMENTS,
  GET_EQUIPMENT,
  DELETE_EQUIPMENTS,
} from "../constants/inventoryConstant";

const INITIAL_STATE = {
  inventory: [],
};
const inventoryReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EQUIPMENTS:
      return {
        inventory: [...state.inventory, action.payload],
      };
    case GET_EQUIPMENTS:
      return {
        inventory: [...action.payload],
      };
    case GET_EQUIPMENT:
      return {
        inventory: action.payload,
      };
    case DELETE_EQUIPMENTS:
      return {
        inventory: state.inventory.filter((p) => p._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default inventoryReducers;
