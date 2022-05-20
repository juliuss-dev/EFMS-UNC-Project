import {
  GET_EQUIPMENT,
  GET_EQUIPMENTS,
  CREATE_EQUIPMENTS,
  DELETE_EQUIPMENTS,
} from "../constants/ictDepartmentConstant";

const INITIAL_STATE = {
  ict: [],
  // reservation: {}
};
//current state         //action to change the state
const ictReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EQUIPMENT:
      return {
        // ...state,
        icts: action.payload,
        // reservation: [...action.payload],
      };
    case GET_EQUIPMENTS:
      return {
        // ...state,
        // reservation: action.payload,
        ict: [...action.payload],
      };
    case CREATE_EQUIPMENTS:
      return {
        ict: [...state.ict, action.payload],
      };
    case DELETE_EQUIPMENTS:
      return {
        ict: state.ict.filter((p) => p._id !== action.payload._id),
      };
    default:
      return state;
  }
};
export default ictReducer;