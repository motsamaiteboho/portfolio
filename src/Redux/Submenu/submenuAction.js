import { CLOSESUBMENU, OPENSUBMENU } from "./submenuTypes"

export const openSubmenu = (text,coordintes) => {
    return {
        type: OPENSUBMENU,
        payload1: text,
        payload2: coordintes
    }
}

export const closeSubmenu = () => {
    return {
        type: CLOSESUBMENU
    }
}