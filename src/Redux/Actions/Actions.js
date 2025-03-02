import { Add_Mobile, Add_token, Language } from "../Constants/Constant";

export function Addtoken(token) {
    return {
        type: Add_token,
        payload: token
    }

}

export function Mobile(mobile) {
    return {
        type: Add_Mobile,
        payload: mobile
    }

}

export function Lang(lang) {
    return {
        type: Language,
        payload: lang
    }

}