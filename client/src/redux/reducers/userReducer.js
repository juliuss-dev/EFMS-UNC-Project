import { GET_USERS, DELETE_USER, GET_USER } from "../constants/userConstant";

const INITIAL_STATE = {
  user: [],
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_USERS:
      return {
        user: [...action.payload],
      };

      case GET_USER:
        return{
          users: action.payload,
        }

    case DELETE_USER:
      return {
        user: state.user.filter((p) => p._id !== action.payload._id),
      };

    default:
      return state;
  }
};
export default userReducer;
