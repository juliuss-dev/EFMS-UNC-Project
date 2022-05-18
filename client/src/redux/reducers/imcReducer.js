import {
  GET_EQUIPMENT,
  GET_EQUIPMENTS,
  CREATE_EQUIPMENTS,
  DELETE_EQUIPMENTS,
} from "../constants/imcDepartmentConstant";

const INITIAL_STATE = {
  imc: [],
  // reservation: {}
};
//current state         //action to change the state
const imcReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EQUIPMENT:
      return {
        // ...state,
        imcs: action.payload,
        // reservation: [...action.payload],
      };
    case GET_EQUIPMENTS:
      return {
        // ...state,
        // reservation: action.payload,
        imc: [...action.payload],
      };
    case CREATE_EQUIPMENTS:
      return {
        imc: [...state.imc, action.payload],
      };
    case DELETE_EQUIPMENTS:
      return {
        imc: state.imc.filter((p) => p._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default imcReducer;
