import { CLOSESIDEBAR, OPENESIDEBAR } from "./sidebarTypes";

export const openSidebar = () => {
    return {
        type: OPENESIDEBAR
    }
}

export const closeSidebar = () => {
    return {
        type: CLOSESIDEBAR
    }
}