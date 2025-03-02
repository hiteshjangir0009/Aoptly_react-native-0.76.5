import { combineReducers } from "redux";
import { Auth_Reducer, Mobile_Reducer, Token_Reducer } from "./Reducer/Auth.reduser";


export default combineReducers({
    Token_Reducer,
    Mobile_Reducer,
})