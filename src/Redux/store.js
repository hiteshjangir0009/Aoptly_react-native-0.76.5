import { configureStore } from "@reduxjs/toolkit"
import rootReduser from "./rootReduser"


const store = configureStore({
    reducer:rootReduser
})

export default store