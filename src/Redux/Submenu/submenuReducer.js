import { CLOSESUBMENU, OPENSUBMENU } from "./submenuTypes";
import sublinks from '../../data'


const initialState = {
    isSubMenuOpen: false,
    page: { page: '', links: [] },
    location: {}
}

const submenuReducer = (state = initialState, action) =>{
    switch (action.type) {
        case OPENSUBMENU:
            const page = sublinks.find((link) => link.page === action.payload1);
            return {...state,isSubMenuOpen:true, page: page, location: action.payload2}
            break;
        case CLOSESUBMENU:
                return {...state, isSubMenuOpen:false}
                break;
        default:
            return state
            break;
    }
}

export default submenuReducer