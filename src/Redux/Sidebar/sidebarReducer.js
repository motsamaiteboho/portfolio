import { CLOSESIDEBAR, OPENESIDEBAR } from "./sidebarTypes";

const initialState = {
    isSidebarOpen: false
}

const sidebarReducer = (state = initialState, action) =>{
    switch (action.type) {
        case OPENESIDEBAR:
            return {...state,isSidebarOpen:true}
            break;
        case CLOSESIDEBAR:
                return {...state, isSidebarOpen:false}
                break;
        default:
            return state
            break;
    }
}

export default sidebarReducer