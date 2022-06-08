import {
  CREATE_PERSONNEL,
  GET_PERSONNELS,
  GET_PERSONNEL,
  DELETE_PERSONNEL,
  POST_ASSIGNIMCPERSONNEL,
  GET_ICTPERSONNELS,
  GET_IMCPERSONNELS,
  GET_MAINTENANCEPERSONNELS,
  GET_VPAPERSONNELS,
} from "../constants/personnelServicesConstant";

const INITIAL_STATE = {
  personnel: [],
};
const personnelReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_PERSONNEL:
      return {
        personnel: [...state.personnel, action.payload],
      };
    case GET_PERSONNEL:
      return {
        personnels: action.payload,
      };
    case GET_PERSONNELS:
      return {
        personnel: [...action.payload],
      };
    case DELETE_PERSONNEL:
      return {
        personnel: state.personnel.filter((p) => p._id !== action.payload._id),
      };
    case POST_ASSIGNIMCPERSONNEL:
      return {
        personnels: action.payload,
      };
    case GET_IMCPERSONNELS:
      return {
        personnel: [...action.payload],
      };
    case GET_ICTPERSONNELS:
      return {
        personnel: [...action.payload],
      };
    case GET_VPAPERSONNELS:
      return {
        personnel: [...action.payload],
      };
    case GET_MAINTENANCEPERSONNELS:
      return {
        personnel: [...action.payload],
      };

    default:
      return state;
  }
};
export default personnelReducers;
