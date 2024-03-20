import { combineReducers, createStore } from "redux";
import { ProjectsReducer } from "./ProjectsReducer";
import { ExperienceReducer } from "./ExperienceReducer";
import { EducationReducer } from "./EducationReducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
    ProjectsReducer,
    ExperienceReducer,
    EducationReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())