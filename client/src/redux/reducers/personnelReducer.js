import {
  CREATE_PERSONNEL,
  GET_PERSONNELS,
  GET_PERSONNEL,
  DELETE_PERSONNEL,
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
    default:
      return state;
  }
};
export default personnelReducers;
