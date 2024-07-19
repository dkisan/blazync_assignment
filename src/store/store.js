import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./studentslice";

const store = configureStore({
    reducer: {
        student: studentReducer,
    }
})

export default store;