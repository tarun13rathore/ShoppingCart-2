import { combineReducers } from "redux";

import shoppingReducer from "../reducers/shopping-reducer";

const rootReducer = combineReducers({
  shop: shoppingReducer,
});

export default rootReducer;
