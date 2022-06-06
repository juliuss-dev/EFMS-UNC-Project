import {
  GET_EQUIPMENT,
  GET_EQUIPMENTS,
  CREATE_EQUIPMENTS,
  DELETE_EQUIPMENTS,
  GET_ALLSPEAKER,
  GET_ALLBLUETOOTHSPEAKER,
  GET_ALLMICROPHONE,
  GET_ALLPROJECTOR,
  GET_ALLPROJECTORSCREEN,
  GET_ALLLIGHTS,
  PUT_ALLUPDATEVPA,
} from "../constants/vpaDepartmentConstant";

const INITIAL_STATE = {
  vpa: [],
  vpas: {},
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
    case GET_ALLSPEAKER:
      return {
        vpa: [...action.payload],
      };
    case GET_ALLBLUETOOTHSPEAKER:
      return {
        vpa: [...action.payload],
      };
    case GET_ALLMICROPHONE:
      return {
        vpa: [...action.payload],
      };
    case GET_ALLPROJECTOR:
      return {
        vpa: [...action.payload],
      };
    case GET_ALLPROJECTORSCREEN:
      return {
        vpa: [...action.payload],
      };
    case GET_ALLLIGHTS:
      return {
        vpa: [...action.payload],
      };
    case PUT_ALLUPDATEVPA:
      return {
        // ...state,
        vpas: action.payload,
      };
    default:
      return state;
  }
};
export default vpaReducer;
