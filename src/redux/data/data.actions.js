import { DataActionType } from "./data.types"  
export const setUser = data => ({
    type: DataActionType.SET_USER,
    payload:data
})