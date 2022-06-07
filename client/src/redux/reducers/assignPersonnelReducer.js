import {
  POST_ASSIGNPERSONNEL,
  GET_ASSIGNPERSONNEL,
  GET_ASSIGNPERSONNELS,
  GET_PERSONNELSCHEDULE,
} from "../constants/assignPersonnelConstant";
import { GET_PERSONNELS } from "../constants/personnelServicesConstant";

const INITIAL_STATE = {
  assignPersonnel: [],
  assignPersonnels: {},
};
const assignPersonnelReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case POST_ASSIGNPERSONNEL:
      return {
        assignPersonnel: [...state.assignPersonnel, action.payload],
      };
    case GET_ASSIGNPERSONNEL:
      return {
        assignPersonnel: [...action.payload],
      };
    case GET_PERSONNELS:
      return {
        assignPersonnels: action.payload,
      };
    case GET_PERSONNELSCHEDULE:
      return {
        assignPersonnels: action.payload,
      };
    default:
      return state;
  }
};
export default assignPersonnelReducers;
