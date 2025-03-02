import { Add_Mobile, Add_token } from "../Constants/Constant"


const initialstate = []

export const Token_Reducer = (state = initialstate, action) => {
    switch (action.type) {

        case Add_token:
            return [
                action.payload,
            ]
       
        default:
            return state
    }
}

export const Mobile_Reducer = (state = initialstate, action) => {
    switch (action.type) {

        case Add_Mobile:
            return [
                action.payload,
            ]
       
        default:
            return state
    }
}