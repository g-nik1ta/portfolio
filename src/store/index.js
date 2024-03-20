import { combineReducers, createStore } from "redux";
import { ProjectsReducer } from "./ProjectsReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    ProjectsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())