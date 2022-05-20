import {
  GET_EQUIPMENT,
  GET_EQUIPMENTS,
  CREATE_EQUIPMENTS,
  DELETE_EQUIPMENTS,
} from "../constants/vpaDepartmentConstant";

const INITIAL_STATE = {
  vpa: [],
  // reservation: {}
};
//current state         //action to change the state
const vpaReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EQUIPMENT:
      return {
        // ...state,
        vpas: action.payload,
        // reservation: [...action.payload],
      };
    case GET_EQUIPMENTS:
      return {
        // ...state,
        // reservation: action.payload,
        vpa: [...action.payload],
      };
    case CREATE_EQUIPMENTS:
      return {
        vpa: [...state.vpa, action.payload],
      };
    case DELETE_EQUIPMENTS:
      return {
        vpa: state.vpa.filter((p) => p._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default vpaReducer;
