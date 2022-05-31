import {
  CREATE_EQUIPMENTS,
  GET_EQUIPMENTS,
  GET_EQUIPMENT,
  DELETE_EQUIPMENTS,
  GET_ALLUNCFLAG,
  GET_ALLPHFLAG,
  GET_ALLAIRCON,
  GET_ALLFAN,
  GET_ALLGENERATOR,
  GET_ALLPLANTS,
  GET_ALLDISPLAYBOARD,
  GET_ALLMONOBLOCK,
  GET_ALLPAVILLIONTABLE,
  GET_ALLINDUSTRIALFAN,
  GET_ALLAERATRONFAN,
  GET_ALLCOOLERFAN,
} from "../constants/inventoryConstant";

const INITIAL_STATE = {
  inventory: [],
};
const inventoryReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CREATE_EQUIPMENTS:
      return {
        inventory: [...state.inventory, action.payload],
      };
    case GET_EQUIPMENTS:
      return {
        inventory: [...action.payload],
      };
    case GET_EQUIPMENT:
      return {
        inventorys: action.payload,
      };
    case DELETE_EQUIPMENTS:
      return {
        inventory: state.inventory.filter((p) => p._id !== action.payload._id),
      };
    case GET_ALLUNCFLAG:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLPHFLAG:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLAIRCON:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLFAN:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLGENERATOR:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLPLANTS:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLDISPLAYBOARD:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLMONOBLOCK:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLPAVILLIONTABLE:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLINDUSTRIALFAN:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLAERATRONFAN:
      return {
        inventory: [...action.payload],
      };
    case GET_ALLCOOLERFAN:
      return {
        inventory: [...action.payload],
      };
    default:
      return state;
  }
};
export default inventoryReducers;
