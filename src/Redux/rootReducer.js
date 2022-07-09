import { combineReducers } from "redux";
import sidebarReducer from "./Sidebar/sidebarReducer";
import submenuReducer from "./Submenu/submenuReducer";
const rootReducer = combineReducers({
    sidebar: sidebarReducer,
    submenu: submenuReducer
})

export default rootReducer;