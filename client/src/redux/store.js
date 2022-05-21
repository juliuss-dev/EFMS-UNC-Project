import { combineReducers, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import messageReducer from "./reducers/messageReducer";
import reservationReducer from "./reducers/reservationReducer";
import loadingReducer from "./reducers/loadingReducer";
import inventoryReducers from "./reducers/inventoryReducer";
import userReducer from "./reducers/userReducer";
import imcReducer from "./reducers/imcReducer";
import ictReducer from "./reducers/ictReducer";
import vpaReducer from "./reducers/vpaReducer";
import personnelReducers from "./reducers/personnelReducer";

const reducer = combineReducers({
  loading: loadingReducer,
  messages: messageReducer,
  reservation: reservationReducer,
  inventory: inventoryReducers,
  user: userReducer,
  imc: imcReducer,
  ict: ictReducer,
  vpa: vpaReducer,
  personnel: personnelReducers,
});

const initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
