import {
  CREATE_SCHEDULE,
  GET_SCHEDULES,
  GET_SCHEDULE,
  DELETE_SCHEDULE,
  PUT_EQUIPMENTSCHEDULE,
  PUT_MAINTENANCEREPORT,
} from "../constants/maintenanceScheduleConstant";

const INITIAL_STATE = {
  schedule: [],
  schedules: {},
};
const maintenanceScheduleReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_SCHEDULE:
      return {
        schedule: [...state.schedule, action.payload],
      };
    case GET_SCHEDULES:
      return {
        schedule: [...action.payload],
      };
    case GET_SCHEDULE:
      return {
        schedules: action.payload,
      };
    case DELETE_SCHEDULE:
      return {
        schedule: state.schedule.filter((p) => p._id !== action.payload._id),
      };
    case PUT_EQUIPMENTSCHEDULE:
      return {
        schedules: action.payload,
      };
    case PUT_MAINTENANCEREPORT:
      return {
        schedules: action.payload,
      };
    default:
      return state;
  }
};
export default maintenanceScheduleReducers;
