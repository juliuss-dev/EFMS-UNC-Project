import { CLEAR_MESSAGES } from "../constants/messageConstant";

export const clearMessages = () => (dispatch) => {
  dispatch({
    type: CLEAR_MESSAGES,
  });
};
