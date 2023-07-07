import {
  combineReducers,
  applyMiddleware,
  legacy_createStore as createStore,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { educationReducer } from "./Education/educationReducer";
import { blogReducer } from "./Blog/blogReducer";
import { projectReducer } from "./Project/projectReducer";

const reducer = combineReducers({
  education: educationReducer,
  blogs: blogReducer,
  projects: projectReducer,
});
const initialState = {};
const middleware = [thunk, logger];

export const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
