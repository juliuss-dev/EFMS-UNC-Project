import {
  GET_MAINTENANCE,
  GET_PHFLAG,
  GET_UNCFLAG,
  GET_MONOBLOCK,
  GET_PAVILLIONTABLE,
} from "../constants/getAllEquipmentConstant";

const INITIAL_STATE = {
  allEquipment: [],
  allEquipments: {},
};

const getAllEquipmentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_MAINTENANCE:
      return {
        allEquipment: [...action.payload],
      };
    case GET_PHFLAG:
      return {
        allEquipments: action.payload,
      };
    case GET_UNCFLAG:
      return {
        allEquipments: action.payload,
      };
    case GET_MONOBLOCK:
      return {
        allEquipments: action.payload,
      };
    case GET_PAVILLIONTABLE:
      return {
        allEquipments: action.payload,
      };
    default:
      return state;
  }
};

export default getAllEquipmentReducer;
