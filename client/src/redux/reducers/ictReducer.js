import {
  GET_EQUIPMENT,
  GET_EQUIPMENTS,
  CREATE_EQUIPMENTS,
  DELETE_EQUIPMENTS,
  GET_COMPUTER,
  GET_ALLDESKTOP,
  GET_ALLLAPTOP,
  GET_ALLMOUSE,
  GET_ALLKEYBOARD,
  GET_ALLPRINTER,
  GET_PRINTER,
  PUT_ALLUPDATEICT,
} from "../constants/ictDepartmentConstant";

const INITIAL_STATE = {
  ict: [],
  icts: {},
  // reservation: {}
};
//current state         //action to change the state
const ictReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_EQUIPMENT:
      return {
        ...state,
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
    case GET_COMPUTER:
      return {
        ...state,
        ict: [...action.payload],
      };
    case GET_ALLDESKTOP:
      return {
        ict: [...action.payload],
      };
    case GET_ALLLAPTOP:
      return {
        ict: [...action.payload],
      };
    case GET_ALLKEYBOARD:
      return {
        ict: [...action.payload],
      };
    case GET_ALLMOUSE:
      return {
        ict: [...action.payload],
      };
    case GET_ALLPRINTER:
      return {
        ict: [...action.payload],
      };
    case PUT_ALLUPDATEICT:
      return {
        // ...state,
        icts: action.payload,
      };
    default:
      return state;
  }
};
export default ictReducer;
