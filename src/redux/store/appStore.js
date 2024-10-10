import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slice/userSlice";
import movieReducer from "../slice/movieSlice";

const appStore = configureStore(
    {
        reducer: {
            user: userReducer,
            movies: movieReducer,
        },
    }
);

export default appStore;


